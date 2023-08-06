import { EVMNetwork } from './pages/Background/types/network';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  enablePasswordEncryption: false,
  showTransactionConfirmationScreen: true,
  factory_address: '0x8c35464a19Dd798F6f3986b9b2a31FC4E558C181',
  stateVersion: '0.1',
  network: {
    chainID: '31337',
    family: 'EVM',
    name: 'Localhost',
    provider: 'http://127.0.0.1:8545/',
    entryPointAddress: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    bundler: 'http://127.0.0.1:3000/rpc',
    baseAsset: {
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
      image:
        'https://ethereum.org/static/2aba39d4e25d90caabb0c85a58c6aba9/f41b0/eth-glyph-colored.png',
    },
  } satisfies EVMNetwork,
};
