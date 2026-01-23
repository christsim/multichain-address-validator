import createSS58Validator from './ss58_validator.js'

// Bittensor uses SS58 address format (Substrate-based) with network prefix 42
// Reference: https://docs.learnbittensor.org/evm-tutorials/convert-h160-to-ss58
// SS58 Registry: https://github.com/paritytech/ss58-registry

// Network prefix 42 (0x2A in hex) is used by Bittensor
export default createSS58Validator({ networkPrefix: 42 })
