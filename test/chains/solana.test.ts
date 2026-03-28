import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('solana', () => {
    it('should accept valid addresses', () => {
        const valid = [
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq',
            '6ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk',
            'HgyXhqapicB8zoyyFQ23oUwwFrBACDyDc7bqUuvnEELM',
            '69UwBV4LPg7hHUS5JXiXyfgVnESmDKe8KJppsLj8pRU',
            'G4qGCGF4vWGPzYi2pxc2Djvgv3j8NiWaHQMgTVebCX6W',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'solana'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpd',
            '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhqAB',
            '0ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk',
            '3Yu3ULPjVc4QqS349VCs22br9zH9T6MWNnSM9RBimkw',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'solana'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        const addr = '833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq';
        ['sol', 'spl'].forEach(name => {
            expect(validate(addr, name), `expected valid via name "${name}"`).to.equal(true)
        })
    })
})
