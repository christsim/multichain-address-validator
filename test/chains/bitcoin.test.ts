import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, NetworkType} from '../../src'

describe('bitcoin', () => {
    it('should accept valid mainnet addresses', () => {
        const valid = [
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP',
            '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y',
            '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',
            '1HVDCg2KrPBH1Mg5SK9fGjAR9KVqyMMdBC',
            '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez',
            '116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd',
            '15uwigGExiNQxTNr1QSZYPXJMp9Px2YnVU',
            '3FyVFsEyyBPzHjD3qUEgX7Jsn4tcHNZFkn',
            '38mKdURe1zcQyrFqRLzR8PRao3iLGEPVsU',
            '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt',
            'bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            'BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'bitcoin'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should accept valid testnet addresses', () => {
        const valid = [
            'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef',
            'mptPo5AvLzJXi4T82vR6g82fT5uJ6HsQCu',
            '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7',
            '2My6YWQy9Umh52TFwhRA5CXHZQVLFoB39vJ',
            'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7',
            'tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy',
        ]
        valid.forEach(addr => {
            expect(validate(addr, {chain: 'bitcoin', networkType: NetworkType.TestNet}), `expected ${addr} to be valid on testnet`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            '1',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aU',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUPP',
            '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUQ',
            '10NLrsHnBcR6dpaBpwz3LSwutbUNkNSjs',
            '1ANNa15ZQXAZUgFiqJ3i7Z2DPU2J6hW62O',
            '1A Na15ZQXAZUgFiqJ3i7Z2DPU2J6hW62i',
            'bc1pmr3w69uk09zqez3vy4l0jjws7uwa9fmljag2mwumfx9rr6045g8scr7nn3',
            'bc1p0xlxvlhemja6c4dqv22uapctqupfhlxm9h8z3k2e72q4k9hcz7vqzk5jj0',
            'ltc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk',
            'notanaddress',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'bitcoin'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        const addr = '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP';
        ['btc', 'omni'].forEach(name => {
            expect(validate(addr, name), `expected valid via name "${name}"`).to.equal(true)
        })
    })
})
