import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('sia', () => {
    describe('valid addresses', () => {
        const valid = [
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
            'ab0c327982abfcc6055a6c9551589167d8a73501aca8769f106371fbc937ad100c955c3b7ba9',
            'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530373',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 20)}...`, () => {
                expect(validate(addr, 'sia')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong length (75 chars)
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f',
            // Wrong length (77 chars)
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f11',

            // Bad checksum (last char changed)
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f2',
            // Ethereum address
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr.slice(0, 30) || '(empty)'}...`, () => {
                expect(validate(addr, 'sia')).to.equal(false)
            })
        })
    })

    describe('alternative chain names', () => {
        it('should accept via name "SiaCoin"', () => {
            expect(validate('a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1', 'SiaCoin')).to.equal(true)
        })
    })
})
