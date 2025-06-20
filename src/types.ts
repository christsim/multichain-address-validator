export type Address = string | {
    address: string,
    memo?: string,
}

export type Chain = string | {
    chain: string,
    networkType?: NetworkType
}

export interface Validator {
    isValidAddress(address: Address): boolean
    isValidMemo?(memo: string): boolean
}

export enum NetworkType {
    MainNet = 'mainnet',
    TestNet = 'testnet',
}
