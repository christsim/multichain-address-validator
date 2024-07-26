import cryptoUtils from '../crypto/utils'
import {Address, NetworkType} from '../types'
import {getAddress} from '../helpers'
import cnBase58 from '../crypto/cnBase58'


const addressRegTest = new RegExp(
    '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$'
)
const integratedAddressRegTest = new RegExp(
    '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$'
)

const types = {
    addressTypes: {mainnet: ['18', '42'], testnet: ['53', '63'], stagenet: ['24']},
    iAddressTypes: {mainnet: ['19'], testnet: ['54'], stagenet: ['25']},
}

function validateNetwork(decoded: string, networkType: NetworkType, addressType: 'standard' | 'integrated') {
    const addressTypes = addressType === 'integrated'
        ? types.iAddressTypes[networkType]
        : types.addressTypes[networkType]

    const at = parseInt(decoded.substr(0, 2), 16).toString()

    switch (networkType) {
        case 'mainnet':
            return addressTypes.indexOf(at) >= 0
        case 'testnet':
            return addressTypes.indexOf(at) >= 0
        // case 'stagenet':
        //     return network.stagenet.indexOf(at) >= 0
        // case 'both':
        //     return network.prod.indexOf(at) >= 0 || network.testnet.indexOf(at) >= 0 || network.stagenet.indexOf(at) >= 0
        default:
            return false
    }
}

function hextobin(hex: string) {
    if (hex.length % 2 !== 0) return null
    const res = new Uint8Array(hex.length / 2)
    for (let i = 0; i < hex.length / 2; ++i) {
        res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    }
    return res
}


export default (networkType: NetworkType) => ({
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        let addressType: 'standard' | 'integrated' = 'standard'
        if (!addressRegTest.test(addr)) {
            if (integratedAddressRegTest.test(addr)) {
                addressType = 'integrated'
            } else {
                return false
            }
        }

        const decodedAddrStr = cnBase58.decode(addr)
        if (!decodedAddrStr) return false

        if (!validateNetwork(decodedAddrStr, networkType, addressType)) return false

        const addrChecksum = decodedAddrStr.slice(-8)
        const hashChecksum = cryptoUtils.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)))

        return addrChecksum === hashChecksum
    }
})
