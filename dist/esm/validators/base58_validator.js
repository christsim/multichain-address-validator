import base58 from '../crypto/base58.js';
// simple base58 validator.  Just checks if it can be decoded.
export default {
    isValidAddress: function (address, opts) {
        try {
            if (!address || address.length == 0) {
                return false;
            }
            if (opts.minLength && (address.length < opts.minLength)) {
                return false;
            }
            if (opts.maxLength && (address.length > opts.maxLength)) {
                return false;
            }
            try {
                const decoded = base58.decode(address);
                if (!decoded || !decoded.length) {
                    return false;
                }
            }
            catch (e) {
                // if decoding fails, assume invalid address
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
