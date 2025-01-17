import {Address, Chain, NetworkType} from './types.js'

export function getAddress(address: Address): string {
    return typeof address === 'string'
        ? address
        : address.address
}

export function getChainName(chain: Chain): string {
    if (typeof chain === "string") {
        return chain
    }
    return chain.chain
}

export function getChainNetworkType(chain: Chain): NetworkType | undefined {
    if (typeof chain === "string") {
        return
    }
    return chain.networkType
}
