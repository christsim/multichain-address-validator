export function getAddress(address) {
    return typeof address === 'string'
        ? address
        : address.address;
}
