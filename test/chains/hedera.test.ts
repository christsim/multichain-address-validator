import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('hedera', () => {
    describe('valid addresses', () => {
        const valid = [
            '0.0.12345',
            '0.0.987654321',
            '0.1.54321',
            '1.0.123',
            '2.3.45678',
            '0.0.1',
            '10.5.987',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'hedera')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Only two components
            '0.0',
            // Four components
            '0.0.0.0',
            // Non-numeric
            'a.b.c',
            '0.0.abc',
            // Negative number
            '0.0.-1',
            // Decimal
            '0.0.1.5',
            // Leading dots
            '.0.0.1',
            // Trailing dots
            '0.0.1.',
            // Spaces
            '0 .0.1',
            // Hex
            '0.0.0x123',
            // Empty segments
            '0..0',
            // Just dots
            '...',
        ]
        invalid.forEach(addr => {
            it(`should reject "${addr || '(empty)'}"`, () => {
                expect(validate(addr, 'hedera')).to.equal(false)
            })
        })
    })
})
