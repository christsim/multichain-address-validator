import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('eos', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'bittrexacct1',
            'binancecleos',
            '123456789012',
            '12345678.012',
            'eosio.token1',
            'my.account12',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'eos'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'bittrexacct',
            'bittrexacct12',
            'BITTREXACCT1',
            'Bittrexacct1',
            'bittrex-act1',
            'bittrex_act1',
            'bittrex@act1',
            'bittrex act1',
            '!@#$%^&*()_+',
            '0xE37c0D48d6',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'eos'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
