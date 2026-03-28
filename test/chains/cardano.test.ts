import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('cardano', () => {
    describe('valid addresses', () => {
        const valid = [
            // Byron era (base58 + CBOR + CRC32)
            'Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v',
            'Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6kom7',
            'DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg',
            'Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm',
            '4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf',
            // Shelley era (bech32 with addr prefix)
            'addr1qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 30)}...`, () => {
                expect(validate(addr, 'cardano')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Bad checksum on Byron address (last char changed)
            'Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9w',
            // Shelley testnet address (addr_test prefix — not in allowed HRP list)
            'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3jcu5d8ps7zex2k2xt3uqxgjqnnj83ws8lhrn648jjxtwq2ytjqp',
            // Stake address (different HRP)
            'stake1uyehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gh6ffgw',
            // Bitcoin bech32 address
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr.slice(0, 40) || '(empty)'}...`, () => {
                expect(validate(addr, 'cardano')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "ada"', () => {
            expect(validate('Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v', 'ada')).to.equal(true)
        })
    })
})
