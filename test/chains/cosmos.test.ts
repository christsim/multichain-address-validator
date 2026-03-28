import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('cosmos', () => {
    describe('valid addresses', () => {
        const valid = [
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve',
            'cosmos1je5wkqm45pfslvhhxdhgm03tyygwd3zpc8qp9m',
            'cosmos1tdayztn3axwayjkrqwes42hkj9ld8r0lwk6gzm',
            'cosmos16a87dpmkutsfx7cddxt749urv62nkcajmr8nw2',
            'cosmos1are335jvx9umq6ps0mh6amaqcfpp6apahmj67k',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'cosmos')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong HRP (Osmosis)
            'osmo1yrpwkydfz6ed873rfgggqzkua2xqfkmwc5peanm',
            // Wrong HRP (Terra)
            'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
            // Bad checksum (last char changed)
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6vf',
            // Too short
            'cosmos1abc',
            // Mixed case (bech32 doesn't allow mixed case)
            'cosmos1Yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Stellar address
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB',
            // Invalid bech32 characters (1, b, i, o are not in charset)
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6v!',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'cosmos')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "atom"', () => {
            expect(validate('cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve', 'atom')).to.equal(true)
        })
    })
})
