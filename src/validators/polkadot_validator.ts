import createSS58Validator from './ss58_validator.js'

// Polkadot uses SS58 address format (Substrate-based)
// SS58 Registry: https://github.com/paritytech/ss58-registry
// Accepts any valid SS58 address (no network prefix restriction)

export default createSS58Validator()
