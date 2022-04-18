
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
    1: { address: '', abi: '' },
    4: { address: "0x131107D25b125eAB1A8685113Cb32fBddb2B5042", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0x131107D25b125eAB1A8685113Cb32fBddb2B5042', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '', abi: '' },
    4: { address: "0x799175C454413283ed09e875118b062b4D0ec489", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0x799175C454413283ed09e875118b062b4D0ec489', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '', abi: '' },
    4: { address: "0x60f31CA91319d1d03710aF52eC5461422ce80EDF", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0x60f31CA91319d1d03710aF52eC5461422ce80EDF', abi: feeSharingSystem.abi },
  },

  
};

