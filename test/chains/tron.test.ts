import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('tron', () => {
    describe('valid addresses', () => {
        const valid = [
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            'TFEkshkSXo8yMe8vcA6P77XmiLfstNWHyT',
            'TUBBzKNM9gr687ucwj8fvVS2Sf2e4WseVa',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'tron')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Too short (33 chars)
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3',
            // Too long (35 chars)
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3rr',
            // Bad checksum (last char changed)
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3s',
            // Doesn't start with T (wrong version byte)
            'ANDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            // Invalid base58 characters (0, O, I, l)
            'T0DzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'tron')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "trc20"', () => {
            expect(validate('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r', 'trc20')).to.equal(true)
        })
    })
})
