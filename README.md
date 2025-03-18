# multichain address validator
Simple blockchain address validator for validating Bitcoin and other blockchain addresses **Node.js and browser**.

[![Build Status](https://travis-ci.org/christsim/multicchain-address-validator.svg?branch=master)](https://travis-ci.org/christsim/multichain-address-validator)

## Installation

### NPM
```
npm install multichain-address-validator
```

### Browser
```html
<script src="dist/multichain-address-validator.bundle.min.js"></script>
```

## API

##### validate (address, chain)

###### Parameters
* address - blockchain address to validate
* chain - blockchain name or object with networkType (mainnet or testnet)

> Returns true if the address is a valid wallet address for the blockchain specified or throws if validator could not be found for chain

### Supported blockchains

* Algorand: `algorand`
* Bitcoin: `bitcoin`, `btc`, `omni`
* Bitcoin Cash: `bitcoin-cash`, `bitcoincash`, `bitcoin cash`, `bch`
* Cardano: `cardano`, `ada`
* Dogecoin: `dogecoin`, `doge`
* EOS: `eos`
* Etherum: `ethereum`, `eth`, `erc20`, `flare`, `avalanche`, `avalanche-c`, `bsc`, `bnb`, `binance`, `sonic`, `berachain`, `story`
* Litecoin: `litecoin`, `ltc`
* Monero: `monero`
* Nano: `nano`
* NEM: `nem`
* Polkadot: `polkadot`
* Ripple: `ripple', `xrp`
* Sia: `sia`
* Solana: `solana`, `spl`
* Tezos: `tezos`
* Tron: `tron`, `trc20`
* XLM: `xlm`, `stellar`

### Usage example

#### Node
```javascript
import { validate } from 'multichain-address-validator'

const valid = validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if (valid)
  console.log('This is a valid address');
else
  console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
import { validate } from 'multichain-address-validator'

const valid = validate('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ethereum');
if (valid)
  console.log('This is a valid address');
else
  console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
import { validate } from 'multichain-address-validator'

const valid = validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', { chain: 'litecoin', networkType: 'testnet' });
if (valid)
  console.log('This is a valid address');
else
  console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

