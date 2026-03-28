import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('tezos', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
            'tz1PyxsQ7xVTa5J7gtBeT7pST5Zi5nk5GSjg',
            'tz1LcuQHNVQEWP2fZjk1QYZGNrfLDwrT3SyZ',
            'tz1RR6wETy9BeXG3Fjk25YmkSMGHxTtKkhpX',
            'tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY',
            'tz2AjVPbMHdDF1XwHVhUrTg6ZvqY83AYhJEy',
            'tz3Mo3gHekQhCmykfnC58ecqJLXrjMKzkF2Q',
            'KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'tezos'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY7',
            'tz4Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            'tz10hf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'tezos'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
