import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('litecoin', () => {
    describe('valid mainnet addresses', () => {
        const valid = [
            // P2PKH (starts with L or M)
            'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9',
            'LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW',
            'Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6',
            'LLUvRjeoNCa1gRuoVzFAzr3pWdu21JJESa',
            // Bech32 native segwit (starts with ltc1q)
            'ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea',
            // Bech32 P2WSH (longer)
            'ltc1qhxka8d59lylj76rpsflhagp76nvckggd8x0tt7jtnphpkmfv3snsk6suq0',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 34)}...`, () => {
                expect(validate(addr, 'litecoin')).to.equal(true)
            })
        })
    })

    describe('valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
            '2N5jUhwzndtTUXspDGJkAvP7WCCRLQkgMfX',
            'QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy',
            'tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms',
        ]
        valid.forEach(addr => {
            it(`should accept testnet ${addr.slice(0, 34)}...`, () => {
                expect(validate(addr, {chain: 'litecoin', networkType: NetworkType.TestNet})).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Bitcoin P2PKH (version 0x00, not 0x30)
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Bad checksum
            'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH0',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Bitcoin bech32 (wrong HRP)
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'litecoin')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "ltc"', () => {
            expect(validate('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'ltc')).to.equal(true)
        })
    })
})
