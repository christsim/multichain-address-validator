import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('tron', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            'TFEkshkSXo8yMe8vcA6P77XmiLfstNWHyT',
            'TUBBzKNM9gr687ucwj8fvVS2Sf2e4WseVa',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'tron'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3',
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3rr',
            'TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3s',
            'ANDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            'T0DzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'tron'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r', 'trc20')).to.equal(true)
    })
})
