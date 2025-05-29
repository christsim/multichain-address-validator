import algorand from './algorand.json'
import aptos from './aptos.json'
import bch from './bch.json'
import bchTestnet from './bch-testnet.json'
import btc from './btc.json'
import btcTestnet from './btc-testnet.json'
import cardano from './cardano.json'
import doge from './doge.json'
import dogeTestnet from './doge-testnet.json'
import eos from './eos.json'
import evm from './evm.json'
import hbar from './hbar.json'
import ltc from './ltc.json'
import ltcTestnet from './ltc-testnet.json'
import monero from './monero.json'
import moneroTestnet from './monero-testnet.json'
import nem from './nem.json'
import nano from './nano.json'
import polkadot from './polkadot.json'
import ripple from './ripple.json'
import sia from './sia.json'
import solana from './solana.json'
import sui from './sui.json'
import tezos from './tezos.json'
import tron from './tron.json'
import xlm from './xlm.json'
import {Address} from '../../src'

export type TestAddress = Address & { invalid?: boolean }

const testAddresses: Record<string, TestAddress[]> = {
    aptos,
    algorand,
    bch,
    'bch-testnet': bchTestnet,
    btc,
    'btc-testnet': btcTestnet,
    cardano,
    doge,
    'doge-testnet': dogeTestnet,
    eos,
    evm,
    hbar,
    ltc,
    'ltc-testnet': ltcTestnet,
    monero,
    'monero-testnet': moneroTestnet,
    nem,
    nano,
    polkadot,
    ripple,
    sia,
    sui,
    solana,
    tezos,
    tron,
    xlm,
} as const;

export default testAddresses
