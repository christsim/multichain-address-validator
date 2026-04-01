import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

function isValidEOSAddress(address: string) {
    const regex = /^[a-z1-5.]+$/g // Must be numbers 1-5, lowercase letters and decimal points only
    return address.search(regex) !== -1 && address.length === 12;
}

export default {
    isValidAddress: function (address: Address) {
        return isValidEOSAddress(getAddress(address))
    }
}
