import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('nem', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D',
            'TDWTRGT6GVWCV7GRWFNI45S53PGOJBKNUF3GE6PB',
            'nbzmqo7zpbynbdur7f75maka2s3dhdcifg775n3d',
            'NBZMQO-7ZPBYN-BDUR7F-75MAKA-2S3DHD-CIFG77-5N3D',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'nem'), `expected ${addr.slice(0, 30)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3',
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3DD',
            'NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3E',
            'N0ZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'nem'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
