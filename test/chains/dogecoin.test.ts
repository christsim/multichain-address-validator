import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('dogecoin', () => {
    it('should accept valid mainnet addresses', () => {
        const valid = [
            'DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU',
            'DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5',
            'DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM',
            'A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS',
            'A5qAJPAc1Ym4A815HcvLKe6Bp5DJeRPJtF',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'doge'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should accept valid testnet addresses', () => {
        expect(validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', {chain: 'doge', networkType: NetworkType.TestNet})).to.equal(true)
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            'DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSV',
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'doge'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin')).to.equal(true)
    })
})
