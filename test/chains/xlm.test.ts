import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, validateMemo} from '../../src'

describe('stellar (xlm)', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB',
            'GB7KKHHVYLDIZEKYJPAJUOTBE5E3NJAXPSDZK7O6O44WR3EBRO5HRPVT',
            'GD6WVYRVID442Y4JVWFWKWCZKB45UGHJAABBJRS22TUSTWGJYXIUR7N2',
            'GBCG42WTVWPO4Q6OZCYI3D6ZSTFSJIXIS6INCIUF23L6VN3ADE4337AP',
            'GDFX463YPLCO2EY7NGFMI7SXWWDQAMASGYZXCG2LATOF3PP5NQIUKBPT',
            'GBXEODUMM3SJ3QSX2VYUWFU3NRP7BQRC2ERWS7E2LZXDJXL2N66ZQ5PT',
            'GAJHORKJKDDEPYCD6URDFODV7CVLJ5AAOJKR6PG2VQOLWFQOF3X7XLOG',
            'GACXQEAXYBEZLBMQ2XETOBRO4P66FZAJENDHOQRYPUIXZIIXLKMZEXBJ',
            'GDD3XRXU3G4DXHVRUDH7LJM4CD4PDZTVP4QHOO4Q6DELKXUATR657OZV',
            'GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'xlm'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFB',
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBBB',
            'gbbm6bkzpehwyo3e3ykredpqxms4vk35ylnu7nfbri26ran7gi5pofbb',
            'SCZANGBA5YHTNYVVV3C7CAZMCLXPILHSE2HLKJUGHXAAGX3HFAGXSB5A',
            'G0BM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB',
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBC',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'xlm'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should validate memos', () => {
        const addr = 'GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ'
        expect(validate({address: addr, memo: '3fdsfsdfasdfdsfgasdgfdsfgas'}, 'xlm'), 'valid memo').to.equal(true)
        expect(validate({address: addr, memo: 'really long memo that exceeds 28 bytes'}, 'xlm'), 'memo too long').to.equal(false)
        expect(validate(addr, 'xlm'), 'no memo').to.equal(true)
        expect(validate({address: addr, memo: ''}, 'xlm'), 'empty memo').to.equal(true)
    })

    it('should accept alternative chain names', () => {
        const addr = 'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB';
        ['stellar', 'stellarlumens'].forEach(name => {
            expect(validate(addr, name), `expected valid via name "${name}"`).to.equal(true)
        })
    })
})
