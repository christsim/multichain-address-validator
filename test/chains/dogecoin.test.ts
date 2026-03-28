import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('dogecoin', () => {
    describe('valid mainnet addresses', () => {
        const valid = [
            'DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU',
            'DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5',
            'DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM',
            'A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS',
            'A5qAJPAc1Ym4A815HcvLKe6Bp5DJeRPJtF',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'doge')).to.equal(true)
            })
        })
    })

    describe('valid testnet addresses', () => {
        const valid = [
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
        ]
        valid.forEach(addr => {
            it(`should accept testnet ${addr}`, () => {
                expect(validate(addr, {chain: 'doge', networkType: NetworkType.TestNet})).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Bitcoin address (wrong version byte)
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Bad checksum
            'DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSV',
            // Bech32 address (not supported for Doge)
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'doge')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "dogecoin"', () => {
            expect(validate('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin')).to.equal(true)
        })
    })
})
