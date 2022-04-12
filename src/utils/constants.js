
const WalletConnectIcon = 'images/wallet/walletconnect.svg';
const MetamaskIcon = 'images/wallet/metamask.svg';
const CronosConnect = 'images/wallet/deficrypto.svg';


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
    name: 'Crypto.com Wallet',
    icon: CronosConnect,
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
    4: { address: "0x49685e165CcCfe6E5C828e8dd68c47c2edB18FF1", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0x49685e165CcCfe6E5C828e8dd68c47c2edB18FF1', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '', abi: '' },
    4: { address: "0xb886D50BeFE795B297D36Ee7a8f155046f3dD2b5", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0xb886D50BeFE795B297D36Ee7a8f155046f3dD2b5', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '', abi: '' },
    4: { address: "0xB24c02Dc2a5D553CBCEdB7B2A6d884e37243F73d", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0xB24c02Dc2a5D553CBCEdB7B2A6d884e37243F73d', abi: feeSharingSystem.abi },
  },

  
};

