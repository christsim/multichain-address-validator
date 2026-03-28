import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate, validateMemo} from '../../src'

describe('stellar (xlm)', () => {
    describe('valid addresses', () => {
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
            it(`should accept ${addr.slice(0, 20)}...`, () => {
                expect(validate(addr, 'xlm')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong length (55 chars)
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFB',
            // Wrong length (57 chars)
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBBB',
            // Lowercase (invalid base32)
            'gbbm6bkzpehwyo3e3ykredpqxms4vk35ylnu7nfbri26ran7gi5pofbb',
            // Secret key (starts with S — wrong version byte)
            'SCZANGBA5YHTNYVVV3C7CAZMCLXPILHSE2HLKJUGHXAAGX3HFAGXSB5A',
            // Invalid base32 characters (0, 1, 8, 9)
            'G0BM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB',
            // Bad checksum (last char changed)
            'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBC',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr || '(empty)'}`, () => {
                expect(validate(addr, 'xlm')).to.equal(false)
            })
        })
    })

    describe('memo validation', () => {
        it('should accept valid memo (<= 28 bytes)', () => {
            expect(validate({address: 'GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', memo: '3fdsfsdfasdfdsfgasdgfdsfgas'}, 'xlm')).to.equal(true)
        })
        it('should reject memo exceeding 28 bytes', () => {
            expect(validate({address: 'GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', memo: 'really long memo that exceeds 28 bytes'}, 'xlm')).to.equal(false)
        })
        it('should accept address without memo', () => {
            expect(validate('GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', 'xlm')).to.equal(true)
        })
        it('should accept empty memo', () => {
            expect(validate({address: 'GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', memo: ''}, 'xlm')).to.equal(true)
        })
    })

    describe('alternative chain names', () => {
        const addr = 'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB'
        const names = ['stellar', 'stellarlumens']
        names.forEach(name => {
            it(`should accept via name "${name}"`, () => {
                expect(validate(addr, name)).to.equal(true)
            })
        })
    })
})
