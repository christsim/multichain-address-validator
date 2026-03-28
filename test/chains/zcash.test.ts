import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('zcash', () => {
    it('should accept valid addresses', () => {
        const valid = [
            't1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jM',
            't1ZVi2YGk98tEGYcNpXYnJFWCoLG2oYwv3J',
            't3cFfPt1Bcvgez9ZbMBFWeZsskxTkPzGCow',
            't1at7nVNsv6taLRrNRvnQdtfLNRDfsGc3Ak',
            't1MYWFMnMbazMP3U8ZCASfdamy6JY5inevP',
            't1a7EMsA9HxrBgPmLYUUq3iBijnDvfgptGJ',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'zcash'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            't1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jN',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            't10N6mnj4gaMX4aL4C2B29ekFgLttT9B1jM',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'zcash'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('t1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jM', 'zec')).to.equal(true)
    })
})
