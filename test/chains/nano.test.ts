import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('nano', () => {
    describe('valid addresses', () => {
        const valid = [
            // xrb_ prefix
            'xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
            'xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo',
            'xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9',
            'xrb_1111111111111111111111111111111111111111111111111111hifc8npp',
            'xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est',
            // nano_ prefix
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
        ]
        valid.forEach(addr => {
            it(`should accept ${addr.slice(0, 30)}...`, () => {
                expect(validate(addr, 'nano')).to.equal(true)
            })
        })
    })

    describe('invalid addresses', () => {
        const invalid = [
            '',
            'notanaddress',
            // Wrong prefix
            'btc_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3',
            // Uppercase prefix
            'NANO_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
            // Uppercase body
            'nano_1Q79AHDR36UQN38P5TP5SQWKN73RNPJ1K8OBTUETDBJCX37D5GAHHD1U9CUH',
            // Characters outside nano base32 alphabet (0, 2, l, v)
            'nano_0q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
            // Bad checksum (last char changed)
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cua',
            // Wrong length (59 chars after prefix)
            'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cu',
            // No prefix
            '1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh',
        ]
        invalid.forEach(addr => {
            it(`should reject ${addr.slice(0, 30) || '(empty)'}...`, () => {
                expect(validate(addr, 'nano')).to.equal(false)
            })
        })
    })
})
