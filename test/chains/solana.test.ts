import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('solana', () => {
    describe('valid addresses', () => {
        const valid = [
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq',
            '6ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk',
            'HgyXhqapicB8zoyyFQ23oUwwFrBACDyDc7bqUuvnEELM',
            '69UwBV4LPg7hHUS5JXiXyfgVnESmDKe8KJppsLj8pRU',
            'G4qGCGF4vWGPzYi2pxc2Djvgv3j8NiWaHQMgTVebCX6W',

        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 30)}...`, () => {
                expect(validate(addr, 'solana')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Too short (42 chars)
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpd',
            // Too long (45 chars)
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhqAB',
            // Invalid base58 characters (0, O, I, l)
            '0ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk',
            // Doesn't decode to 32 bytes
            '3Yu3ULPjVc4QqS349VCs22br9zH9T6MWNnSM9RBimkw',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            // Bitcoin address
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'solana')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        const addr = '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq'
        const names = ['sol', 'spl']
        names.forEach(name => {
            it(`should accept via name "${name}"`, () => {
                expect(validate(addr, name)).to.equal(true)
            })
        })
    })
})
