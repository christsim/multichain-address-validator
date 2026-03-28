import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('algorand', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7Y',
            'LCRDY3LYAANTVS3XRHEHWHGXRTKZYVTX55P5IA2AT5ZDJ4CWZFFZIKVHLI',
            'SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM',
            'AKHSHWO2TUWE53RMVG6ZUBNAEX6MTYPT76TCIDCDWYUUTK6HCJTZS2HDQU',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'algorand'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7',
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7YY',
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WXYZ',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'algorand'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })
})
