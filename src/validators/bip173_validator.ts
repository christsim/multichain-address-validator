import bech32 from '../crypto/bech32'
import {NetworkType} from '../types'

// bip 173 bech 32 addresses (https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
export default {
    isValidAddress: function (address: string, networkType: NetworkType, opts: any = {}) {
        const decoded = bech32.decode(address, bech32.encodings.BECH32);
        if (!decoded) {
            return false;
        }

        const bech32Hrp = decoded.hrp;
        let correctBech32Hrps;
        if (networkType === 'mainnet' || networkType === 'testnet') {
            correctBech32Hrps = opts.bech32Hrp[networkType];
        } else if (opts.bech32Hrp) {
            correctBech32Hrps = opts.bech32Hrp.prod.concat(opts.bech32Hrp.testnet)
        } else {
            return false;
        }

        if (correctBech32Hrps.indexOf(bech32Hrp) === -1) {
            return false;
        }

        return true;
    }
};
