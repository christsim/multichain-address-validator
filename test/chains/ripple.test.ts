import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, validateMemo} from '../../src'

describe('ripple', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV',
            'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh',
            'rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'ripple'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'sG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCo',
            'rG1QQv2nh2gr7RCZ1P8YYcBUKC',
            'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCnXXXXX',
            'r0G1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'ripple'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should validate memos', () => {
        const addr = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh'
        expect(validate({address: addr, memo: '50000'}, 'ripple'), 'valid memo').to.equal(true)
        expect(validate({address: addr, memo: '0'}, 'ripple'), 'memo 0').to.equal(true)
        expect(validate({address: addr, memo: '4294967295'}, 'ripple'), 'max uint32').to.equal(true)
        expect(validate({address: addr, memo: 'hello'}, 'ripple'), 'non-numeric memo').to.equal(false)
        expect(validate({address: addr, memo: '4294967296'}, 'ripple'), 'overflow memo').to.equal(false)
        expect(validate({address: addr, memo: '-1'}, 'ripple'), 'negative memo').to.equal(false)
        expect(validate(addr, 'ripple'), 'no memo').to.equal(true)
        expect(validateMemo('50000', 'ripple'), 'validateMemo valid').to.equal(true)
        expect(validateMemo('hello', 'ripple'), 'validateMemo invalid').to.equal(false)
    })

    it('should accept alternative chain names', () => {
        expect(validate('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'xrp')).to.equal(true)
    })
})
