import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('bitcoin', () => {
    describe('valid mainnet addresses', () => {
        const valid = [
            // P2PKH (starts with 1)
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y',
            '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',
            '1HVDCg2KrPBH1Mg5SK9fGjAR9KVqyMMdBC',
            '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez',
            '116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd',
            '15uwigGExiNQxTNr1QSZYPXJMp9Px2YnVU',
            // P2SH (starts with 3)
            '3FyVFsEyyBPzHjD3qUEgX7Jsn4tcHNZFkn',
            '38mKdURe1zcQyrFqRLzR8PRao3iLGEPVsU',
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            // Bech32 native segwit v0 (starts with bc1q)
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            'BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4',

        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 34)}...`, () => {
                expect(validate(addr, 'bitcoin')).to.equal(true)
            })
        })
    })

    describe('valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            'mptPo5AvLzJXi4T82vR6g82fT5uJ6HsQCu',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
            '2My6YWQy9Umh52TFwhRA5CXHZQVLFoB39vJ',
            'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7',
            'tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy',
        ]
        valid.forEach(addr => {
            it(`should accept testnet ${addr.slice(0, 34)}...`, () => {
                expect(validate(addr, {chain: 'bitcoin', networkType: NetworkType.TestNet})).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',                                          // empty
            '1',                                         // too short
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aU',       // one char short
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUPP',     // one char long
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUQ',       // bad checksum (last char changed)
            '10NLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',        // invalid base58 char '0'
            '1ANNa15ZQXAZUgFiqJ3i7Z2DPU2J6hW62O',       // invalid base58 char 'O'
            '1A Na15ZQXAZUgFiqJ3i7Z2DPU2J6hW62i',       // space in address
            // Taproot (bc1p) — not allowed since allowedSegwitVersions=[0]
            'bc1pmr3w69uk09zqez3vy4l0jjws7uwa9fmljag2mwumfx9rr6045g8scr7nn3',
            'bc1p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk5jj0',
            // Bech32 with wrong HRP
            'ltc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            // Random garbage
            'notanaddress',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',  // Ethereum address
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'bitcoin')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        const addr = '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP'
        const names = ['btc', 'omni']
        names.forEach(name => {
            it(`should accept via name "${name}"`, () => {
                expect(validate(addr, name)).to.equal(true)
            })
        })
    })
})
