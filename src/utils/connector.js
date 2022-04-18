import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { DeFiWeb3Connector } from "deficonnect";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

const POLLING_INTERVAL = 12000

const chainIds = [1, 3, 4, 56, 97];

export const injected = new InjectedConnector({ supportedChainIds: chainIds })


export const walletconnector = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/66b1fd9daec44fbeb94eca2b0386b455"},
  bridge: 'https://bridge.walletconnect.org',
  supportedChainIds:[1,4,56,97],
  qrcode: true,
});


export const cronosConnector = new DeFiWeb3Connector({
  supportedChainIds: [1],
  rpc: {
    1: "https://mainnet.infura.io/v3/INFURA_API_KEY",
    25: "https://evm.cronos.org/", // cronos mainet
  },
  pollingInterval: 15000,
});

export const bsc = new BscConnector({ supportedChainIds: chainIds })

export const CoinbaseWallet = new WalletLinkConnector({

  url: `https://mainnet.infura.io/v3/INFURA_API_KEY`,
 
  appName: "Web3-react Demo",
 
  supportedChainIds: [1, 3, 4, 5, 42],
 
 });