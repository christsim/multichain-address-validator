import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('tezos', () => {
    describe('valid addresses', () => {
        const valid = [
            // tz1 (ed25519)
            'tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
            'tz1PyxsQ7xVTa5J7gtBeT7pST5Zi5nk5GSjg',
            'tz1LcuQHNVQEWP2fZjk1QYZGNrfLDwrT3SyZ',
            'tz1RR6wETy9BeXG3Fjk25YmkSMGHxTtKkhpX',
            'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY',
            // tz2 (secp256k1)
            'tz2AjVPbMHdDF1XwHVhUrTg6ZvqY83AYhJEy',
            // tz3 (p256)
            'tz3Mo3gHekQhCmykfnC58ecqJLXrjMKzkF2Q',
            // KT1 (originated / smart contracts)
            'KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr}`, () => {
                expect(validate(addr, 'tezos')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Bad checksum (last char changed)
            'tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY7',
            // Wrong prefix (tz4 doesn't exist)
            'tz4Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
            // Bitcoin address (valid base58 checksum but wrong prefix — should now fail)
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Invalid base58 characters
            'tz10hf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'tezos')).to.equal(false)
            })
        })
    })
})
