
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
    3: { address: "0xD4Ad95884Ff38676bD45f8ee43e0dE0CCc43f768", abi: scarDustToken.abi },
    56: { address: '', abi: '' },
    97: { address: '0xD4Ad95884Ff38676bD45f8ee43e0dE0CCc43f768', abi: scarDustToken.abi },
  },
  [CONTRACTS_TYPE.TOKEN_DISTRIBUTOR]: {
    1: { address: '', abi: '' },
    3: { address: "0x2A0C205CEB22Fc80b41FFa6e8A0011e4aF3aC070", abi: tokenDistributor.abi },
    56: { address: '', abi: '' },
    97: { address: '0x2A0C205CEB22Fc80b41FFa6e8A0011e4aF3aC070', abi: tokenDistributor.abi },
  },
  [CONTRACTS_TYPE.FEESHARING_SYSTEM]: {
    1: { address: '', abi: '' },
    3: { address: "0xB24c02Dc2a5D553CBCEdB7B2A6d884e37243F73d", abi: feeSharingSystem.abi },
    56: { address: '', abi: '' },
    97: { address: '0xB24c02Dc2a5D553CBCEdB7B2A6d884e37243F73d', abi: feeSharingSystem.abi },
  },

  
};

