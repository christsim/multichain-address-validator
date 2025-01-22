import {Address} from './types.js'

export function getAddress(address: Address): string {
    return typeof address === 'string'
        ? address
        : address.address
}
