import { getAddress } from '../helpers.js';
function isValidEOSAddress(address) {
    const regex = /^[a-z0-9.]+$/g; // Must be numbers, lowercase letters and decimal points only
    return address.search(regex) !== -1 && address.length === 12;
}
export default {
    isValidAddress: function (address) {
        return isValidEOSAddress(getAddress(address));
    }
};
