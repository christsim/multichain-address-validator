import {describe, it} from 'mocha'
import {expect} from 'chai'

import {validate, Address, Chain, NetworkType} from '../src'
// @ts-ignore
import addresses from './addresses/addresses'


function valid(address: Address, chain: Chain) {
    const valid = validate(address, chain);
    expect({address, chain, valid}).to.deep.equal({address, chain, valid: true});
}

function invalid(address: Address, chain: Chain) {
    const valid = validate(address, chain);
    expect({address, chain, valid}).to.deep.equal({address, chain, valid: false});
}

interface TestCase {
    alternatives: string[],
    valid: keyof typeof addresses,
    exclude?: (keyof typeof addresses)[]
    testnet?: {
        valid: keyof typeof addresses
    }
}

const TestCases: Record<string, TestCase> = {
    'algorand': {
        alternatives: [],
        valid: 'algorand',
    },
    'aptos': {
        alternatives: [],
        valid: 'aptos',
        exclude: ['sui']
    },
    'bitcoin': {
        alternatives: ['btc', 'omni'],
        valid: 'btc', // corresponds to addresses.js
        exclude: ['bch', 'ltc'],
        testnet: {
            valid: 'btc-testnet'
        }
    },
    'bitcoin-cash': {
        alternatives: ['bch', 'bitcoincash', 'bitcoin cash'],
        valid: 'bch',
        exclude: ['btc', 'ltc'],
        testnet: {
            valid: 'bch-testnet',
        }
    },
    'cardano': {
        alternatives: ['ada'],
        valid: 'cardano',
    },
    'doge': {
        alternatives: ['dogecoin'],
        exclude: ['btc'],
        valid: 'doge',
        testnet: {
            valid: 'doge-testnet',
        }
    },
    'eos': {
        alternatives: [],
        valid: 'eos',
    },
    'ethereum': {
        alternatives: ['eth', 'flare', 'avalanche', 'avalanche-c', 'bsc', 'bnb', 'binance', 'sonic', 'berachain', 'story'],
        valid: 'evm',
    },
    'hedera': {
        alternatives: [],
        valid: 'hbar'
    },
    'litecoin': {
        alternatives: ['ltc'],
        exclude: ['btc', 'bch'],
        valid: 'ltc',
        testnet: {
            valid: 'ltc-testnet'
        }
    },
    'monero': {
        alternatives: [],
        valid: 'monero',
        testnet: {
            valid: 'monero-testnet',
        }
    },
    'nano': {
        alternatives: [],
        valid: 'nano',
    },
    'nem': {
        alternatives: [],
        valid: 'nem',
    },
    'polkadot': {
        alternatives: [],
        valid: 'polkadot',
    },
    'ripple': {
        alternatives: ['xrp'],
        valid: 'ripple'
    },
    'sia': {
        alternatives: [],
        valid: 'sia',
    },
    'solana': {
        alternatives: ['spl'],
        valid: 'solana'
    },
    'sui': {
        alternatives: [],
        valid: 'sui',
        exclude: ['aptos']
    },
    'tezos': {
        alternatives: [],
        valid: 'tezos',
        exclude: ['btc', 'bch', 'btc-testnet', 'ltc-testnet', 'bch-testnet', 'doge', 'doge-testnet', 'ltc', 'tron'],
    },
    'tron': {
        alternatives: ['trc20'],
        valid: 'tron',
    },
    'xlm': {
        alternatives: ['stellar'],
        valid: 'xlm',
    }
}

describe('multichain address validator', function () {

    it('should validate valid addresses for chains', function () {
        for (const chain in TestCases) {
            for (const c of [chain, ...TestCases[chain].alternatives]) {
                if (!addresses[TestCases[chain].valid]) {
                    throw new Error(`No valid addresses for chain '${chain}'`)
                }
                for (const address of addresses[TestCases[chain].valid]) {
                    valid(address, c)
                }

                if (TestCases[chain].testnet) {
                    if (!addresses[TestCases[chain].testnet.valid]) {
                        throw new Error(`No valid testnet addresses for chain '${chain}'`)
                    }
                    for (const address of addresses[TestCases[chain].testnet.valid]) {
                        valid(address, { chain: c, networkType: NetworkType.TestNet })
                    }
                }
            }
        }
    })

    it('should invalidate invalid addresses for chains', function () {
        for (const chain in TestCases) {
            for (const c of [chain, ...TestCases[chain].alternatives]) {
                const invalidChains = Object.keys(addresses)
                    .filter(key => key !== TestCases[chain].valid)
                    .filter(key => !TestCases[chain].exclude?.includes(key as any))

                for (const invalidChain of invalidChains) {
                    for (const address of addresses[invalidChain]) {
                        invalid(address, c)
                    }
                }
            }
        }
    })
})


