import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('sia', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
            'ab0c327982abfcc6055a6c9551589167d8a73501aca8769f106371fbc937ad100c955c3b7ba9',
            'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530373',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'sia'), `expected ${addr.slice(0, 20)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f',
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f11',
            'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f2',
            '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'sia'), `expected "${addr.slice(0, 30)}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1', 'SiaCoin')).to.equal(true)
    })
})
