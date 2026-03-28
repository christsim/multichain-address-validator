import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('nano', () => {
    it('should accept valid addresses', () => {
        const valid = [
            'xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
            'xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo',
            'xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9',
            'xrb_1111111111111111111111111111111111111111111111111111hifc8npp',
            'xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est',
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'nano'), `expected ${addr.slice(0, 30)}... to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            'btc_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
            'NANO_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
            'nano_1Q79AHDR36UQN38P5TP5SQWKN73RNPJ1K8OBTUETDBJCX37D5GAHHD1U9CUH',
            'nano_0q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cua',
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cu',
            '1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'nano'), `expected "${addr.slice(0, 30)}" to be invalid`).to.equal(false)
        })
    })
})
