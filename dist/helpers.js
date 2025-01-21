export function getAddress(address) {
    return typeof address === 'string'
        ? address
        : address.address;
}
export function getChainName(chain) {
    if (typeof chain === "string") {
        return chain;
    }
    return chain.chain;
}
export function getChainNetworkType(chain) {
    if (typeof chain === "string") {
        return;
    }
    return chain.networkType;
}
