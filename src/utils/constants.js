
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
    3: { address: "0xff29117e680d6977f487d647356d376654B0F0CE", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0xff29117e680d6977f487d647356d376654B0F0CE', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '', abi: '' },
    3: { address: "0xdc187779eB7dA87423f4586156162Aa87B6b5762", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0xdc187779eB7dA87423f4586156162Aa87B6b5762', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '', abi: '' },
    3: { address: "0x9792C3b38b67a9fA26FD082BeE96EfeD508D2D61", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0x9792C3b38b67a9fA26FD082BeE96EfeD508D2D61', abi: feeSharingSystem.abi },
  },

  
};

