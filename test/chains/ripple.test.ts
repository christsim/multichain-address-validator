import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, validateMemo, NetworkType} from '../../src'

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

    // XLS-5 tagged addresses, from the encoding tables of
    // https://github.com/XRPLF/XRPL-Standards/tree/master/XLS-0005-tagged-addresses
    // (rGWrZyQqhTp9Xu7G5Pkayo7bXjH4k4QYpf with no tag, then tags 0 to 4294967295)
    const xAddresses = {
        mainnet: [
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV5fdx1mHp98tDMoQXb',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV8AqEL4xcZj5whKbmc',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV8xvjGQTYPiAx6gwDC',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV8zpDURx7DzBCkrQE7',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtVoYiC9UvKfjKar4LJe',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtVoKj3MnFGMXEFMnvJV',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtVozpjdhPQVdt3ghaWw',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtVqrDUk2vDpkTjPsY73',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV1kAsixQTdMjbWi39u',
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV18pX8yuPT7y4xaEHi',
        ],
        testnet: [
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQn49b3qD26PK7FcGSKE',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnSy8RHqGHoGJ59spi2',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnSz1uDimDdPYXzSpyw',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnTryP9tG9TW8GeMBmd',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnT2oqaCDzMEuCDAj1j',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnTMgJJYfAbsiPsc6Zg',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQn7ryu2W6njw7mT1jmS',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnVsw45sDtGHhLi27Qa',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnX8tDFQ53itLNqs6vU',
            'TVE26TYGhfLC7tQDno7G8dGtxSkYQnXoy6kSDh6rZzApc69',
        ],
    }
    const testnet = {chain: 'ripple', networkType: NetworkType.TestNet}

    it('should accept X-addresses for their own network', () => {
        xAddresses.mainnet.forEach(addr => {
            expect(validate(addr, 'ripple'), `expected ${addr} to be valid`).to.equal(true)
            expect(validate(addr, testnet), `expected ${addr} to be invalid on testnet`).to.equal(false)
        })
        xAddresses.testnet.forEach(addr => {
            expect(validate(addr, testnet), `expected ${addr} to be valid on testnet`).to.equal(true)
            expect(validate(addr, 'ripple'), `expected ${addr} to be invalid on mainnet`).to.equal(false)
        })
    })

    it('should reject malformed X-addresses', () => {
        // All but the first carry a valid checksum
        const invalid = [
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV8zpDURx7DzBCkrQE8', // a one-character typo
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV1FDVCsehdArbqMPry', // TAG_64 flag (0x02), reserved
            'XVLhHMPHU98es4dbozjVtdWzVrDjtVxcDFEcKoPdMvzPFe3', // unknown flag 0x03
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV53jSo8mAyvfybtDtz', // NO_TAG flag with a nonzero tag byte
            'XVLhHMPHU98es4dbozjVtdWzVrDjtV8zpDURxdvCUWzjWrq', // TAG_32 flag with a nonzero upper tag byte
            'XWefhSGM3bMt39McvTCeFnQWzLj5KNSFvsn2KDQ36ZgDutv', // unknown prefix 0x05 0x45
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'ripple'), `expected "${addr}" to be invalid`).to.equal(false)
            expect(validate(addr, testnet), `expected "${addr}" to be invalid on testnet`).to.equal(false)
        })
    })

    it('should check a memo against the tag of an X-address', () => {
        const noTag = 'XVLhHMPHU98es4dbozjVtdWzVrDjtV5fdx1mHp98tDMoQXb'
        const tag2 = 'XVLhHMPHU98es4dbozjVtdWzVrDjtV8zpDURx7DzBCkrQE7'
        expect(validate({address: noTag, memo: '50000'}, 'ripple'), 'memo with an untagged X-address').to.equal(true)
        expect(validate({address: noTag, memo: 'hello'}, 'ripple'), 'invalid memo with an untagged X-address').to.equal(false)
        expect(validate({address: tag2, memo: '2'}, 'ripple'), 'memo equal to the tag').to.equal(true)
        expect(validate({address: tag2, memo: '3'}, 'ripple'), 'memo different from the tag').to.equal(false)
        expect(validate({address: tag2}, 'ripple'), 'tagged X-address without a memo').to.equal(true)
    })

    it('should accept alternative chain names', () => {
        expect(validate('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'xrp')).to.equal(true)
    })
})
