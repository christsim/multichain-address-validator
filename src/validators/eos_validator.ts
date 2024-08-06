import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

function isValidEOSAddress(address: string) {
    const regex = /^[a-z0-9.]+$/g // Must be numbers, lowercase letters and decimal points only
    return address.search(regex) !== -1 && address.length === 12;
}

export default {
    isValidAddress: function (address: Address) {
        return isValidEOSAddress(getAddress(address))
    }
}
