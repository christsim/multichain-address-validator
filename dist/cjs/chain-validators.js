"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidatorForChain = getValidatorForChain;
const types_js_1 = require("./types.js");
const index_js_1 = require("./validators/index.js");
const chainValidators = {
    algorand: { validator: index_js_1.AlgorandValidator },
    aptos: { validator: index_js_1.MoveValidator },
    bitcoin: {
        alternatives: ['btc', 'omni'],
        validator: {
            mainnet: (0, index_js_1.BTCValidator)({
                addressTypes: ['00', '05'],
                bech32Hrp: ['bc'],
            }),
            testnet: (0, index_js_1.BTCValidator)({
                addressTypes: ['6f', 'c4', '3c', '26'],
                bech32Hrp: ['tb'],
            }),
        },
    },
    'bitcoincash': {
        alternatives: ['bch', 'bitcoin-cash', 'bitcoin cash'],
        validator: {
            mainnet: (0, index_js_1.BCHValidator)({
                addressTypes: ['00', '05'],
                bech32Hrp: ['bc'],
                networkType: types_js_1.NetworkType.MainNet,
            }),
            testnet: (0, index_js_1.BCHValidator)({
                addressTypes: ['6f', 'c4', '3c', '26'],
                bech32Hrp: ['tb'],
                networkType: types_js_1.NetworkType.TestNet,
            }),
        }
    },
    cardano: {
        alternatives: ['ada'],
        validator: index_js_1.CardanoValidator,
    },
    doge: {
        alternatives: ['dogecoin'],
        validator: {
            mainnet: (0, index_js_1.BTCValidator)({ addressTypes: ['1e', '16'] }),
            testnet: (0, index_js_1.BTCValidator)({ addressTypes: ['71', 'c4'] }),
        }
    },
    eos: { validator: index_js_1.EOSValidator },
    ethereum: {
        alternatives: [
            'arbitrum',
            'avalanche',
            'avalanche-c',
            'base',
            'binance',
            'bnb',
            'bsc',
            'eth',
            'erc20',
            'flare',
            'sonic',
        ],
        validator: index_js_1.ETHValidator
    },
    hedera: {
        alternatives: ['hbar'],
        validator: index_js_1.HederaValidator
    },
    litecoin: {
        alternatives: ['ltc'],
        validator: {
            mainnet: (0, index_js_1.BTCValidator)({
                addressTypes: ['30', '05', '32'],
                bech32Hrp: ['ltc'],
            }),
            testnet: (0, index_js_1.BTCValidator)({
                addressTypes: ['6f', 'c4', '3a'],
                bech32Hrp: ['tltc']
            })
        }
    },
    monero: {
        validator: {
            mainnet: (0, index_js_1.MoneroValidator)(types_js_1.NetworkType.MainNet),
            testnet: (0, index_js_1.MoneroValidator)(types_js_1.NetworkType.TestNet),
        }
    },
    nem: { validator: index_js_1.NemValidator },
    nano: { validator: index_js_1.NanoValidator },
    polkadot: { validator: index_js_1.PolkadotValidator },
    ripple: {
        alternatives: ['xrp'],
        validator: index_js_1.RippleValidator,
    },
    sia: { validator: index_js_1.SiaValidator },
    solana: {
        alternatives: ['spl'],
        validator: index_js_1.SolanaValidator,
    },
    sui: { validator: index_js_1.MoveValidator },
    tron: {
        alternatives: ['trc20'],
        validator: (0, index_js_1.TronValidator)(),
    },
    tezos: { validator: index_js_1.TezosValidator },
    xlm: {
        alternatives: ['stellar'],
        validator: index_js_1.XLMValidator,
    },
};
function getValidatorForChain(chain) {
    const chainName = chain.chain || chain;
    const networkType = chain.networkType || types_js_1.NetworkType.MainNet;
    const key = Object.keys(chainValidators).find(key => key.toUpperCase() === chainName.toUpperCase() || chainValidators[key]
        ?.alternatives
        ?.map(alternative => alternative.toUpperCase())
        ?.includes(chainName.toUpperCase()));
    return chainValidators[key]?.validator[networkType] || chainValidators[key]?.validator;
}
