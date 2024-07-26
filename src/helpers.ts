import {Address} from './types'

export function getAddress(address: Address): string {
    return typeof address === 'string'
        ? address
        : address.address
}
