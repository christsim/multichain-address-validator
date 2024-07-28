import bech32 from '../crypto/bech32.js'

interface Bip173Options {
    bech32Hrp: string[]
}

// bip 173 bech 32 addresses (https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
export default {
    isValidAddress: function (address: string, opts: Bip173Options) {
        const decoded = bech32.decode(address, bech32.encodings.BECH32);
        if (!decoded) {
            return false;
        }

        const bech32Hrp = decoded.hrp;

        return opts.bech32Hrp.indexOf(bech32Hrp) !== -1;
    }
};
