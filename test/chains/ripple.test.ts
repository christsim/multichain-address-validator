import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, validateMemo} from '../../src'

describe('ripple', () => {
    describe('valid addresses', () => {
        const valid = [
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV',
            'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
            'rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'ripple')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Doesn't start with r
            'sG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            // Bad checksum (last char changed)
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCo',
            // Too short
            'rG1QQv2nh2gr7RCZ1P8YYcBUKC',
            // Too long
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCnXXXXX',
            // Invalid characters (0, O, I, l are not in Ripple alphabet)
            'r0G1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'ripple')).to.equal(false)
            })
        })
    })

    describe('memo validation', () => {
        it('should accept valid memo (destination tag)', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: '50000'}, 'ripple')).to.equal(true)
        })
        it('should accept memo 0', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: '0'}, 'ripple')).to.equal(true)
        })
        it('should accept max uint32 memo', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: '4294967295'}, 'ripple')).to.equal(true)
        })
        it('should reject non-numeric memo', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: 'hello'}, 'ripple')).to.equal(false)
        })
        it('should reject memo exceeding uint32', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: '4294967296'}, 'ripple')).to.equal(false)
        })
        it('should reject negative memo', () => {
            expect(validate({address: 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', memo: '-1'}, 'ripple')).to.equal(false)
        })
        it('should accept address without memo', () => {
            expect(validate('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'ripple')).to.equal(true)
        })
        it('should validate memo via validateMemo', () => {
            expect(validateMemo('50000', 'ripple')).to.equal(true)
            expect(validateMemo('hello', 'ripple')).to.equal(false)
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "xrp"', () => {
            expect(validate('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'xrp')).to.equal(true)
        })
    })
})
