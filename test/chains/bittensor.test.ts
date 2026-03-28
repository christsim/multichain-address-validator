import {describe, it} from 'mocha'
import {expect} from 'chai'
import {validate} from '../../src'

describe('bittensor', () => {
    it('should accept valid addresses', () => {
        const valid = [
            '5CS9x5NsPHpb2THeS92zBYCSSk4MFoQjjx76DB8bEzeJTTSt',
            '5CZmB94iEG4Ld7JkejAWToAw7NKEfV3YZHX7FYaqPGh7isXe',
            '5DA7UsaYbk1UnhhtTxqpwdqjuxhQ2rW7D6GTN1S1S5tC2NRV',
            '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw',
            '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy',
            '5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc',
            '5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL',
            '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY',
            '5Gs5ung9YhbXjrEx469w5V9C6V8nEVM6XS9CzMMq1tq16cMt',
        ]
        valid.forEach(addr => {
            expect(validate(addr, 'bittensor'), `expected ${addr} to be valid`).to.equal(true)
        })
    })

    it('should reject invalid addresses', () => {
        const invalid = [
            '',
            '1iQPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDB',
            'invalid_ss58_address',
            '0x1234567890abcdef',
            '123',
        ]
        invalid.forEach(addr => {
            expect(validate(addr, 'bittensor'), `expected "${addr}" to be invalid`).to.equal(false)
        })
    })

    it('should accept alternative chain names', () => {
        expect(validate('5CS9x5NsPHpb2THeS92zBYCSSk4MFoQjjx76DB8bEzeJTTSt', 'tao')).to.equal(true)
    })
})
