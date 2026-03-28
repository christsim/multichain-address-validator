import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('sui', () => {
    it('should accept valid addresses', () => {
        const valid = [
            '0xaabf25b0c115130a4ad88bfa08627c5a103b7851e90869c23fadaf0512dd5133',
            '0xdce6ab89a1d26c99491a70fd4a2536d065925114deee916a1ae7d35007f4dedf',
            '0xd05448f15a03f25b2816c4538b72bd54752ba7522d4831a4c9ea5a613becb47a',
            '0x39f521d22f611a4dec2f790fef2e4f8d1f96550509e85beccf8acec52c1a7219',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'sui'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'aabf25b0c115130a4ad88bfa08627c5a103b7851e90869c23fadaf0512dd5133',
            '0xaabf25b0c115130a4ad88bfa08627c5a103b7851e90869c23fadaf0512dd513',
            '0xaabf25b0c115130a4ad88bfa08627c5a103b7851e90869c23fadaf0512dd51330',
            '0xaabf25b0c115130a4ad88bfa08627c5a103b7851e90869c23fadaf0512ddZZZZ',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'sui'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
