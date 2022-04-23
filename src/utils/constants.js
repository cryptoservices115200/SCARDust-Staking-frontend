
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
    4: { address: "0x131107D25b125eAB1A8685113Cb32fBddb2B5042", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0x131107D25b125eAB1A8685113Cb32fBddb2B5042', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '0xda5f1423f9c996B6FEAD44c95BaDF38FdD8bdF3e', abi: tokenDistributor.abi },
    4: { address: "0x799175C454413283ed09e875118b062b4D0ec489", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0x799175C454413283ed09e875118b062b4D0ec489', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '0x38daCCb1e6B3A232295296e275584fa7c8EE06d6', abi: feeSharingSystem.abi },
    4: { address: "0x60f31CA91319d1d03710aF52eC5461422ce80EDF", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0x60f31CA91319d1d03710aF52eC5461422ce80EDF', abi: feeSharingSystem.abi },
  },


};

