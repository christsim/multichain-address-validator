import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('hedera', () => {
    it('should accept valid addresses', () => {
        const valid = ['0.0.12345', '0.0.987654321', '0.1.54321', '1.0.123', '2.3.45678', '0.0.1', '10.5.987']
        valid.forEach(addr => {
            expect(validate(addr, 'hedera'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = ['', 'notanaddress', '0.0', '0.0.0.0', 'a.b.c', '0.0.abc', '0.0.-1', '0.0.1.5', '.0.0.1', '0.0.1.', '0 .0.1', '0.0.0x123', '0..0', '...']
        invalid.forEach(addr => {
            expect(validate(addr, 'hedera'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
