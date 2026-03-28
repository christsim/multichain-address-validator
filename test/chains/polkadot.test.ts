import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('polkadot', () => {
    it('should accept valid addresses', () => {
        const valid = [
            '1iQPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDB',
            '1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg',
            '5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr',
            'CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp',
            '15FKUKXC6kwaXxJ1tXNywmFy4ZY6FoDFCnU3fMbibFdeqwGw',
            'CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'polkadot'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            '1iQPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDC',
            '10QPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDB',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            '1iQPK',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'polkadot'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
