import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('cardano', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v',
            'Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6kom7',
            'DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg',
            'Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm',
            '4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf',
            'addr1qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'cardano'), `expected ${addr.slice(0, 30)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9w',
            'addr_test1qz2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3jcu5d8ps7zex2k2xt3uqxgjqnnj83ws8lhrn648jjxtwq2ytjqp',
            'stake1uyehkck0lajq8gr28t9uxnuvgcqrc6070x3k9r8048z8y5gh6ffgw',
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'cardano'), `expected "${addr.slice(0, 40)}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v', 'ada')).to.equal(true)
    })
})
