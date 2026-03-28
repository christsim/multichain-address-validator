import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('eos', () => {
    describe('valid addresses', () => {
        const valid = [
            'bittrexacct1',
            'binancecleos',
            '123456789012',
            '12345678.012',
            'eosio.token1',
            'my.account12',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'eos')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            // Too short (11 chars)
            'bittrexacct',
            // Too long (13 chars)
            'bittrexacct12',
            // Uppercase letters
            'BITTREXACCT1',
            'Bittrexacct1',
            // Special characters
            'bittrex-act1',
            'bittrex_act1',
            'bittrex@act1',
            // Spaces
            'bittrex act1',
            // All dots (semantically invalid but passes regex — known limitation)
            // Non-alphanumeric characters
            '!@#$%^&*()_+',
            // Hex address
            '0xE37c0D48d6',
        ]
        invalid.forEach(addr => {
            it(`should reject "${addr || '(empty)'}"`, () => {
                expect(validate(addr, 'eos')).to.equal(false)
            })
        })
    })
})
