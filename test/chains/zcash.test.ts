import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('zcash', () => {
    describe('valid addresses', () => {
        const valid = [
            't1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jM',
            't1ZVi2YGk98tEGYcNpXYnJFWCoLG2oYwv3J',
            't3cFfPt1Bcvgez9ZbMBFWeZsskxTkPzGCow',
            't1at7nVNsv6taLRrNRvnQdtfLNRDfsGc3Ak',
            't1MYWFMnMbazMP3U8ZCASfdamy6JY5inevP',
            't1a7EMsA9HxrBgPmLYUUq3iBijnDvfgptGJ',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'zcash')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Bad checksum (last char changed)
            't1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jN',
            // Bitcoin address (different version bytes)
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Invalid base58 characters
            't10N6mnj4gaMX4aL4C2B29ekFgLttT9B1jM',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'zcash')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "zec"', () => {
            expect(validate('t1NN6mnj4gaMX4aL4C2B29ekFgLttT9B1jM', 'zec')).to.equal(true)
        })
    })
})
