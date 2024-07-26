import {Chain, NetworkType, Validator} from './types'

import {
    AlgorandValidator,
    BCHValidator,
    BTCValidator,
    CardanoValidator,
    EOSValidator,
    ETHValidator,
    MoneroValidator,
    NanoValidator,
    NemValidator,
    PolkadotValidator,
    RippleValidator,
    SiaValidator,
    SolanaValidator,
    TezosValidator,
    TronValidator,
    XLMValidator,
} from './validators/index'


type ChainValidators = Record<string, {
    alternatives?: string[],
    validator: Validator | {
        mainnet: Validator,
        testnet: Validator,
    },
    addressTypes?: {
        prod: string[],
        testnet: string[]
    }
    bech32Hrp?: {
        prod: string[],
        testnet: string[]
    }
}>

const chainValidators: ChainValidators = {
    algorand: {validator: AlgorandValidator},
    bitcoin: {
        alternatives: ['btc', 'omni'],
        validator: {
            mainnet: BTCValidator(NetworkType.MainNet),
            testnet: BTCValidator(NetworkType.TestNet),
        },
    },
    'bitcoincash': {
        alternatives: ['bch', 'bitcoin-cash', 'bitcoin cash'],
        validator: {
            mainnet: BCHValidator(NetworkType.MainNet),
            testnet: BCHValidator(NetworkType.TestNet),
        }
    },
    cardano: {
        alternatives: ['ada'],
        validator: {
            mainnet: CardanoValidator(NetworkType.MainNet, {
                bech32Hrp: {mainnet: ['addr'], testnet: ['addr']}
            }),
            testnet: CardanoValidator(NetworkType.TestNet, {
                bech32Hrp: {mainnet: ['addr'], testnet: ['addr']}
            }),
        }
    },
    doge: {
        alternatives: ['dogecoin'],
        validator: {
            mainnet: BTCValidator(NetworkType.MainNet, {
                addressTypes: {mainnet: ['1e', '16'], testnet: ['71', 'c4']}
            }),
            testnet: BTCValidator(NetworkType.MainNet, {
                addressTypes: {mainnet: ['1e', '16'], testnet: ['71', 'c4']}
            })
        }
    },
    eos: {validator: EOSValidator},
    ethereum: {
        alternatives: ['eth', 'erc20', 'flare', 'avalanche', 'avalanche-c', 'bsc', 'bnb', 'binance'],
        validator: ETHValidator
    },
    litecoin: {
        alternatives: ['ltc'],
        validator: {
            mainnet: BTCValidator(NetworkType.MainNet, {
                addressTypes: {mainnet: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
                bech32Hrp: {mainnet: ['ltc'], testnet: ['tltc']},
            }),
            testnet: BTCValidator(NetworkType.TestNet, {
                addressTypes: {mainnet: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
                bech32Hrp: {mainnet: ['ltc'], testnet: ['tltc']},
            })
        }
    },
    monero: {
        validator: {
            mainnet: MoneroValidator(NetworkType.MainNet),
            testnet: MoneroValidator(NetworkType.TestNet),
        }
    },
    nem: {validator: NemValidator},
    nano: {validator: NanoValidator},
    polkadot: {validator: PolkadotValidator},
    ripple: {
        alternatives: ['xrp'],
        validator: RippleValidator,
    },
    sia: {validator: SiaValidator},
    solana: {
        alternatives: ['spl'],
        validator: SolanaValidator,
    },
    tron: {
        alternatives: ['trc20'],
        validator: TronValidator(),
    },
    tezos: {validator: TezosValidator},
    xlm: {
        alternatives: ['stellar'],
        validator: XLMValidator,
    },
}

export function getValidatorForChain(chain: Chain): Validator | undefined {
    const chainName = (chain as any).chain ?? chain
    const networkType = (chain as any).networkType ?? NetworkType.MainNet

    const key = Object.keys(chainValidators).find(key =>
        key.toUpperCase() === chainName.toUpperCase() || chainValidators[key]
            ?.alternatives
            ?.map(alternative => alternative.toUpperCase())
            ?.includes(chainName.toUpperCase())
    )

    return chainValidators[key]?.validator[networkType] ?? chainValidators[key]?.validator
}
