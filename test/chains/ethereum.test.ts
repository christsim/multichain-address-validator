import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('ethereum', () => {
    describe('valid addresses', () => {
        const valid = [
            // All-lowercase (no checksum)
            '0xde709f2102306220921060314715629080e2fb77',
            '0x27b1fdb04752bbc536007a920d24acb045561c26',
            '0xc6d9d2cd449a754c494264e1809c50e34d64562b',
            // All-uppercase (no checksum)
            '0x52908400098527886E0F7030069857D2E4169EE7',
            '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
            // EIP-55 checksummed (mixed case)
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            '0xa00354276d2fC74ee91e37D085d35748613f4748',
            '0xAff4d6793F584a473348EbA058deb8caad77a288',
            '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
            '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
            '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
            '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'ethereum')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Missing 0x prefix
            'E37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Wrong length (39 hex chars)
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9F',
            // Wrong length (41 hex chars)
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FFF',
            // Non-hex characters
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776ZZZZ',
            // Wrong EIP-55 checksum (single char case flipped)
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9Ff',
            '0x5aaeb6053F3E94C9b9A09f33669435E7Ef1BeAed', // lowercase a in 5aA
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            // Uppercase X in 0X
            '0XE37C0D48D68DA5C5B14E5C1A9F1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'ethereum')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        const addr = '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF'
        const names = ['eth', 'arbitrum', 'avalanche', 'base', 'binance', 'bnb', 'bsc', 'optimism', 'monad']
        names.forEach(name => {
            it(`should accept via name "${name}"`, () => {
                expect(validate(addr, name)).to.equal(true)
            })
        })
    })
})
