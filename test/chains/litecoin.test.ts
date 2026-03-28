import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('litecoin', () => {
    it('should accept valid mainnet addresses', () => {
        const valid = [
            'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9',
            'LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW',
            'Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6',
            'LLUvRjeoNCa1gRuoVzFAzr3pWdu21JJESa',
            'ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea',
            'ltc1qhxka8d59lylj76rpsflhagp76nvckggd8x0tt7jtnphpkmfv3snsk6suq0',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'litecoin'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should accept valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
            '2N5jUhwzndtTUXspDGJkAvP7WCCRLQkgMfX',
            'QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy',
            'tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms',
        ]
        valid.forEach(addr => {
            expect(validate(addr, {chain: 'litecoin', networkType: NetworkType.TestNet}), `expected ${addr} to be valid on testnet`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH0',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'litecoin'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'ltc')).to.equal(true)
    })
})
