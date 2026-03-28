import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('algorand', () => {
    describe('valid addresses', () => {
        const valid = [
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7Y',
            'LCRDY3LYAANTVS3XRHEHWHGXRTKZYVTX55P5IA2AT5ZDJ4CWZFFZIKVHLI',
            'SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM',
            'AKHSHWO2TUWE53RMVG6ZUBNAEX6MTYPT76TCIDCDWYUUTK6HCJTZS2HDQU',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 20)}...`, () => {
                expect(validate(addr, 'algorand')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong length (57 chars)
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7',
            // Wrong length (59 chars)
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WK7YY',
            // Bad checksum (multiple chars changed)
            'GONISIUAYDOMHM7VURRAAAP5H6OAWRRBCPXEIOZO3QI7TZKR5GTAQ7WXYZ',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr.slice(0, 30) || '(empty)'}...`, () => {
                expect(validate(addr, 'algorand')).to.equal(false)
            })
        })
    })
})
