import {describe, it} from 'mocha'
import {expect} from 'chai'

import {validate, Chain, NetworkType} from '../src'
// @ts-ignore
import addresses, {TestAddress} from './addresses/addresses'

function check(address: TestAddress, chain: Chain) {
    address.invalid
        ? invalid(address, chain)
        : valid(address, chain)
}

function valid(address: TestAddress, chain: Chain) {
    const valid = validate(address, chain);
    expect({address, chain, valid}).to.deep.equal({address, chain, valid: true});
}

function invalid(address: TestAddress, chain: Chain) {
    const valid = validate(address, chain);
    expect({address, chain, valid}).to.deep.equal({address, chain, valid: false});
}

interface TestCase {
    alternatives: string[],
    testAddresses: keyof typeof addresses,
    exclude?: (keyof typeof addresses)[]
    testnet?: {
        testAddresses: keyof typeof addresses
    }
}

const TestCases: Record<string, TestCase> = {
    'algorand': {
        alternatives: [],
        testAddresses: 'algorand',
    },
    'aptos': {
        alternatives: [],
        testAddresses: 'aptos',
        exclude: ['sui']
    },
    'bitcoin': {
        alternatives: ['btc', 'omni'],
        testAddresses: 'btc', // corresponds to addresses.js
        exclude: ['bch', 'ltc'],
        testnet: {
            testAddresses: 'btc-testnet'
        }
    },
    'bitcoin-cash': {
        alternatives: ['bch', 'bitcoincash', 'bitcoin cash'],
        testAddresses: 'bch',
        exclude: ['btc', 'ltc'],
        testnet: {
            testAddresses: 'bch-testnet',
        }
    },
    'cardano': {
        alternatives: ['ada'],
        testAddresses: 'cardano',
    },
    'doge': {
        alternatives: ['dogecoin'],
        exclude: ['btc'],
        testAddresses: 'doge',
        testnet: {
            testAddresses: 'doge-testnet',
        }
    },
    'eos': {
        alternatives: [],
        testAddresses: 'eos',
    },
    'ethereum': {
        alternatives: ['eth', 'flare', 'avalanche', 'avalanche-c', 'bsc', 'bnb', 'binance', 'sonic', 'berachain', 'story'],
        testAddresses: 'evm',
    },
    'hedera': {
        alternatives: [],
        testAddresses: 'hbar'
    },
    'litecoin': {
        alternatives: ['ltc'],
        exclude: ['btc', 'bch'],
        testAddresses: 'ltc',
        testnet: {
            testAddresses: 'ltc-testnet'
        }
    },
    'monero': {
        alternatives: [],
        testAddresses: 'monero',
        testnet: {
            testAddresses: 'monero-testnet',
        }
    },
    'nano': {
        alternatives: [],
        testAddresses: 'nano',
    },
    'nem': {
        alternatives: [],
        testAddresses: 'nem',
    },
    'polkadot': {
        alternatives: [],
        testAddresses: 'polkadot',
    },
    'ripple': {
        alternatives: ['xrp'],
        testAddresses: 'ripple'
    },
    'sia': {
        alternatives: [],
        testAddresses: 'sia',
    },
    'solana': {
        alternatives: ['spl'],
        testAddresses: 'solana'
    },
    'sui': {
        alternatives: [],
        testAddresses: 'sui',
        exclude: ['aptos']
    },
    'tezos': {
        alternatives: [],
        testAddresses: 'tezos',
        exclude: ['btc', 'bch', 'btc-testnet', 'ltc-testnet', 'bch-testnet', 'doge', 'doge-testnet', 'ltc', 'tron'],
    },
    'tron': {
        alternatives: ['trc20'],
        testAddresses: 'tron',
    },
    'xlm': {
        alternatives: ['stellar'],
        testAddresses: 'xlm',
    }
}

describe('multichain address validator', function () {

    it('should check valid addresses for chains', function () {
        for (const chain in TestCases) {
            for (const c of [chain, ...TestCases[chain].alternatives]) {
                if (!addresses[TestCases[chain].testAddresses]) {
                    throw new Error(`No test addresses for chain '${chain}'`)
                }
                for (const address of addresses[TestCases[chain].testAddresses]) {
                    check(address, c)
                }

                if (TestCases[chain].testnet) {
                    if (!addresses[TestCases[chain].testnet.testAddresses]) {
                        throw new Error(`No test testnet addresses for chain '${chain}'`)
                    }
                    for (const address of addresses[TestCases[chain].testnet.testAddresses]) {
                        check(address, { chain: c, networkType: NetworkType.TestNet })
                    }
                }
            }
        }
    })

    it('should check invalid addresses for chains', function () {
        for (const chain in TestCases) {
            for (const c of [chain, ...TestCases[chain].alternatives]) {
                const invalidChains = Object.keys(addresses)
                    .filter(key => key !== TestCases[chain].testAddresses)
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


