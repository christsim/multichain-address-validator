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

    // SEP-23 test cases, https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0023.md
    it('should accept muxed (M...) addresses', () => {
        const valid = [
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAACJUQ', // id 0
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVAAAAAAAAAAAAAJLK', // id 9223372036854775808
            'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ', // the ed25519 key of both
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'xlm'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
        expect(validate({address: valid[0], memo: 'deposit'}, 'xlm'), 'muxed address with a memo').to.equal(true)
    })

    it('should reject the SEP-23 invalid strkeys', () => {
        const invalid = [
            'GAAAAAAAACGC6', // invalid length (Ed25519 should be 32 bytes, not 5)
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAACJUR', // the unused trailing bit must be zero
            'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZA', // invalid length (congruent to 1 mod 8)
            'GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUACUSI', // decodes to 36 bytes, not 35
            'G47QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVP2I', // algorithm bits are 7
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVAAAAAAAAAAAAAJLKA', // invalid length (congruent to 6 mod 8)
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVAAAAAAAAAAAAAAV75I', // decodes to 44 bytes, not 43
            'M47QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAACJUQ', // algorithm bits are 7
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAACJUK===', // padding is not allowed
            'MA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJUAAAAAAAAAAAACJUO', // invalid checksum
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'xlm'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        const addr = 'GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB';
        ['stellar', 'stellarlumens'].forEach(name => {
            expect(validate(addr, name), `expected valid via name "${name}"`).to.equal(true)
        })
    })
})
