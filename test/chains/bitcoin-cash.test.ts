import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('bitcoin-cash', () => {
    describe('valid mainnet addresses', () => {
        const valid = [
            // Legacy P2PKH
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y',
            '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',
            // Legacy P2SH
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            // CashAddr with prefix
            'bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            // CashAddr without prefix
            'qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',

        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 40)}...`, () => {
                expect(validate(addr, 'bch')).to.equal(true)
            })
        })
    })

    describe('valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
        ]
        valid.forEach(addr => {
            it(`should accept testnet ${addr}`, () => {
                expect(validate(addr, {chain: 'bch', networkType: NetworkType.TestNet})).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            // CashAddr with bad checksum (last char changed)
            'bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax808',
            // All-same CashAddr characters (fake checksum)
            'bitcoincash:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            'bitcoincash:qppppppppppppppppppppppppppppppppppppppppp',
            // Wrong prefix
            'litecoin:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            // Mixed case CashAddr (should fail case check)
            'bitcoincash:Qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            // Random garbage
            'notanaddress',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'bch')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        const addr = '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP'
        const names = ['bch', 'bitcoincash', 'bitcoin cash', 'bitcoin-cash']
        names.forEach(name => {
            it(`should accept via name "${name}"`, () => {
                expect(validate(addr, name)).to.equal(true)
            })
        })
    })
})
