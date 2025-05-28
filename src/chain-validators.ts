import type {Chain, Validator} from './types.js'
import { NetworkType } from './types.js'

import {
    AlgorandValidator,
    BCHValidator,
    BTCValidator,
    CardanoValidator,
    EOSValidator,
    ETHValidator,
    HederaValidator,
    MoneroValidator,
    MoveValidator,
    NanoValidator,
    NemValidator,
    PolkadotValidator,
    RippleValidator,
    SiaValidator,
    SolanaValidator,
    TezosValidator,
    TronValidator,
    XLMValidator,
} from './validators/index.js'


type ChainValidators = Record<string, {
    alternatives?: string[],
    validator: Validator | {
        mainnet: Validator,
        testnet: Validator,
    },
}>

const chainValidators: ChainValidators = {
    algorand: {validator: AlgorandValidator},
    aptos: {validator: MoveValidator},
    bitcoin: {
        alternatives: ['btc', 'omni'],
        validator: {
            mainnet: BTCValidator({
                addressTypes: ['00', '05'],
                bech32Hrp: ['bc'],
            }),
            testnet: BTCValidator({
                addressTypes: ['6f', 'c4', '3c', '26'],
                bech32Hrp: ['tb'],
            }),
        },
    },
    'bitcoincash': {
        alternatives: ['bch', 'bitcoin-cash', 'bitcoin cash'],
        validator: {
            mainnet: BCHValidator({
                addressTypes: ['00', '05'],
                bech32Hrp: ['bc'],
                networkType: NetworkType.MainNet,
            }),
            testnet: BCHValidator({
                addressTypes: ['6f', 'c4', '3c', '26'],
                bech32Hrp: ['tb'],
                networkType: NetworkType.TestNet,
            }),
        }
    },
    cardano: {
        alternatives: ['ada'],
        validator: CardanoValidator,
    },
    doge: {
        alternatives: ['dogecoin'],
        validator: {
            mainnet: BTCValidator({addressTypes: ['1e', '16']}),
            testnet: BTCValidator({addressTypes: ['71', 'c4']}),
        }
    },
    eos: {validator: EOSValidator},
    ethereum: {
        alternatives: [
            'arbitrum',
            'avalanche',
            'avalanche-c',
            'base',
            'berachain',
            'binance',
            'BinanceSmartChain',
            'bnb',
            'bsc',
            'eth',
            'EthereumClassic',
            'EthereumPow',
            'erc20',
            'flare',
            'sonic',
            'story',
        ],
        validator: ETHValidator
    },
    hedera: {
        alternatives: ['hbar'],
        validator: HederaValidator
    },
    litecoin: {
        alternatives: ['ltc'],
        validator: {
            mainnet: BTCValidator({
                addressTypes: ['30', '32'],
                bech32Hrp: ['ltc'],
            }),
            testnet: BTCValidator({
                addressTypes: ['6f', 'c4', '3a'],
                bech32Hrp: ['tltc']
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
    sui: {validator: MoveValidator},
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
    const chainName = (chain as any).chain || chain
    const networkType = (chain as any).networkType || NetworkType.MainNet

    const key = Object.keys(chainValidators).find(key =>
        key.toUpperCase() === chainName.toUpperCase() || chainValidators[key]
            ?.alternatives
            ?.map(alternative => alternative.toUpperCase())
            ?.includes(chainName.toUpperCase())
    )

    return chainValidators[key]?.validator[networkType] || chainValidators[key]?.validator
}
