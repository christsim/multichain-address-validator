import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('monero', () => {
    it('should accept valid mainnet addresses', () => {
        const valid = [
            '47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG2',
            '48bWuoDG75CXMDHbmPEvUF2hm1vLDic7ZJ7hqRkL65QR9p13AQAX4eEACXNk4YP115Q4KRVZnAvmMBHrcGfv9FvKPZnH6vH',
            '88WB4JKdQVhWfkc8cBT9EEJ6vejSAqKJHbV1dXBAXdpgQovtNDNRxfKCS7wB8rHQ5D5zH2Pd1YkyMNNQDie6ZfeZ311fPgn',
            '4Gd4DLiXzBmbVX2FZZ3Cvu6fUaWACup1qDowprUCje1kSP4FmbftiJMSfV8kWZXNqmVwj4m52xqtgFNUudVmsmGkGvkLcCibWfVUfUFVB7',
            '4J5sF94AzXgFgx8LuWc9dcWkJkGkD3cL3L2AuhX6QA9jFvSxxj6QhHqHXqM2b2Go7G8RyDzEbHxYd9G26XUUbuJChipEyBz9fENMU2Ua9b',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'monero'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
    })

    it('should accept valid testnet addresses', () => {
        const valid = [
            'A2be3UvzMtkJtxRYgcCbQt2y7Rp2eLVGqNTWfZeankrWimSMM4y7uMP6B9oAZaHsXTj8KFSerkSkkVRuEuEca9QM8VhxCNU',
            '9uXRFi4PZMqhsnthBF6bGdfVnBSZtfKkR7Td8qPM7jUKZeTfR1tLhCoTLqYNE12xuiQg3aWGiLw83bWsqwTRLaM4Jk47xYM',
            '9tFTaQM39JXhULZsHauPHhjFrjcGSGXoijEPYoRgAky9Veck2mFp3EifQ2tKHmEHuuUoFfgYRNR2bVaborz5oi8JA8xkqjY',
        ]
        valid.forEach(addr => {
            expect(validate(addr, {chain: 'monero', networkType: NetworkType.TestNet}), `expected ${addr.slice(0, 20)}... to be valid on testnet`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            '47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG',
            '47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG2AAAA',
            '47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG3',
            '47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnP00',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'monero'), `expected "${addr.slice(0, 40)}" to be invalid`).to.equal(false)
        })
    })

    it('should reject cross-network addresses', () => {
        expect(validate('47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG2',
            {chain: 'monero', networkType: NetworkType.TestNet}), 'mainnet on testnet').to.equal(false)
        expect(validate('A2be3UvzMtkJtxRYgcCbQt2y7Rp2eLVGqNTWfZeankrWimSMM4y7uMP6B9oAZaHsXTj8KFSerkSkkVRuEuEca9QM8VhxCNU',
            'monero'), 'testnet on mainnet').to.equal(false)
    })
})
