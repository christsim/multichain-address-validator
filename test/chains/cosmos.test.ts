import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('cosmos', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve',
            'cosmos1je5wkqm45pfslvhhxdhgm03tyygwd3zpc8qp9m',
            'cosmos1tdayztn3axwayjkrqwes42hkj9ld8r0lwk6gzm',
            'cosmos16a87dpmkutsfx7cddxt749urv62nkcajmr8nw2',
            'cosmos1are335jvx9umq6ps0mh6amaqcfpp6apahmj67k',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'cosmos'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'osmo1yrpwkydfz6ed873rfgggqzkua2xqfkmwc5peanm',
            'terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v',
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6vf',
            'cosmos1abc',
            'cosmos1Yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB',
            'cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6v!',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'cosmos'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('cosmos1yrpwkydfz6ed873rfgggqzkua2xqfkmwcvf6ve', 'atom')).to.equal(true)
    })
})
