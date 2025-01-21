import { Address, Chain, NetworkType } from './types.js';
export declare function getAddress(address: Address): string;
export declare function getChainName(chain: Chain): string;
export declare function getChainNetworkType(chain: Chain): NetworkType | undefined;
