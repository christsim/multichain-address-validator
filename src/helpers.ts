import {Address} from './types.js'

export function getAddress(address: Address): string {
    return typeof address === 'string'
        ? address
        : address.address
}

export function getMemo(address: Address): string | undefined {
    return typeof address === 'string'
        ? undefined
        : address.memo
}
