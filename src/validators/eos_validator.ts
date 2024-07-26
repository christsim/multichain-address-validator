import {Address} from '../types'
import {getAddress} from '../helpers'

function isValidEOSAddress(address: string) {
    const regex = /^[a-z0-9.]+$/g // Must be numbers, lowercase letters and decimal points only
    return address.search(regex) !== -1 && address.length === 12;
}

export default {
    isValidAddress: function (address: Address) {
        return isValidEOSAddress(getAddress(address))
    }
}
