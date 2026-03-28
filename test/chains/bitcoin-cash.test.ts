import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('bitcoin-cash', () => {
    it('should accept valid mainnet addresses', () => {
        const valid = [
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y',
            '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            'bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            'qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'bch'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should accept valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
        ]
        valid.forEach(addr => {
            expect(validate(addr, {chain: 'bch', networkType: NetworkType.TestNet}), `expected ${addr} to be valid on testnet`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax808',
            'bitcoincash:qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
            'bitcoincash:qppppppppppppppppppppppppppppppppppppppppp',
            'litecoin:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            'bitcoincash:Qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807',
            'notanaddress',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'bch'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        const addr = '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP';
        ['bch', 'bitcoincash', 'bitcoin cash', 'bitcoin-cash'].forEach(name => {
            expect(validate(addr, name), `expected valid via name "${name}"`).to.equal(true)
        })
    })
})
