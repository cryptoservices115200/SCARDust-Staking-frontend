
const WalletConnectIcon = 'images/wallet/walletconnect.svg';
const MetamaskIcon = 'images/wallet/metamask.svg';
const CoinbaseConnect = 'images/wallet/coinbasewallet.svg';


export const wallets = [
  {
    name: 'Metamask',
    icon: MetamaskIcon,
  },
  {
    name: 'Wallet Connect',
    icon: WalletConnectIcon,
  },
  {
    name: 'CoinBase Wallet',
    icon: CoinbaseConnect,
  }
];

export const CONNECTOR_LOCAL_STORAGE_KEY = 'connector_id';

const scarDustToken = require("../contracts/ScarDustToken.json");
const tokenDistributor = require("../contracts/TokenDistributor.json");
const feeSharingSystem = require("../contracts/FeeSharingSystem.json");

export const CONTRACTS_TYPE = {
  SCARDUST_TOKEN: "SCARDUST_TOKEN",
  TOKEN_DISTRIBUTOR: "TOKEN_DISTRIBUTOR",
  FEESHARING_SYSTEM: "FEESHARING_SYSTEM"
};

export const CONTRACTS = {

  [CONTRACTS_TYPE.SCARDUST_TOKEN]: {
    1: { address: '0x8b561b023580fbe6eee234c8d1079d5c7e828393', abi: scarDustToken.abi },
    4: { address: "0x656514BE49240895419a9F2F61eE5850bA9173f1", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0x5502e518fa5786cd141F17E3ffB1F11fda2FA59F', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '0xda5f1423f9c996B6FEAD44c95BaDF38FdD8bdF3e', abi: tokenDistributor.abi },
    4: { address: "0xE84E2F8ddd1E20C000511055920084dc96Afc4eF", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0xcA3dF4364b1DFCC554b9836d431Ef15B5c726935', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '0x38daCCb1e6B3A232295296e275584fa7c8EE06d6', abi: feeSharingSystem.abi },
    4: { address: "0xBF73A704F67Cc4381956Fa5B7C9F2a30590c07c3", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0xeFc5E985D5f6aBa86Bc2eaadBB1f00db9150e8B8', abi: feeSharingSystem.abi },
  },


};

