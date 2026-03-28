import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('nem', () => {
    describe('valid addresses', () => {
        const valid = [
            // Mainnet (starts with N)
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D',
            // Testnet (starts with T)
            'TDWTRGT6GVWCV7GRWFNI45S53PGOJBKNUF3GE6PB',
            // Lowercase should also work (gets uppercased)
            'nbzmqo7zpbynbdur7f75maka2s3dhdcifg775n3d',
            // With hyphens (gets stripped)
            'NBZMQO-7ZPBYN-BDUR7F-75MAKA-2S3DHD-CIFG77-5N3D',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 30)}...`, () => {
                expect(validate(addr, 'nem')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong length (39 chars after removing hyphens)
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3',
            // Wrong length (41 chars)
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3DD',
            // Bad checksum (last char changed)
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3E',
            // Invalid base32 characters (0, 1, 8, 9 are not valid)
            'N0ZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'nem')).to.equal(false)
            })
        })
    })
})
