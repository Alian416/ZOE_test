var secretData = require('./secrets.json');

require('dotenv').config();


var HDWalletProvider = require("truffle-hdwallet-provider");


//var infuraRinkebyUrl = secretData.INFURA_RINKEBY_URL;
//var infuraRopstenUrl = secretData.INFURA_ROPSTEN_URL;
var sokolUrl = secretData.SOKOL_NETWORK_URL;
//var infuraMainUrl = secretData.CORE_NETWORK_URL;
//var coreUrl = secretData.CORE_NETWORK_URL;
var mnemonic = secretData.SECRET_MNEMONIC;
var providerSokol = new HDWalletProvider(mnemonic, sokolUrl);

console.log("Public key = "+providerSokol.address);

module.exports = {
   plugins: ["truffle-verify-alain"],
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
   /*/
    development: {
     host: 'localhost',
     port: 8545,
     gas: 5000000,
     network_id: '*', // eslint-disable-line camelcase
   },
    test: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      network_id: '*', // eslint-disable-line camelcase
    },
    rinkeby: {
      provider: providerRinkeby,
      network_id: 4, // eslint-disable-line camelcase
      gasPrice: "10000000000",
      gas: 5000000,
    },
    ropsten: {
      provider: providerRopsten,
      network_id: 3, // eslint-disable-line camelcase
      gasPrice: "10000000000",
      gas: 5000000,
    },
    /*/
    sokol: {
      provider: providerSokol,
      network_id: 77, // eslint-disable-line camelcase
      gasPrice: "10000000000",
      gas: 5000000,
    },
    /*
    main: {
      provider: providerMain,
      gasPrice: "1000000000",
      network_id: 99, // eslint-disable-line camelcase
      gas: 5000000,
    }
    /*/
 },

 // Configure your compilers
 compilers: {
  solc: {
    version: "0.8.3",      // Fetch exact version from solc-bin (default: truffle's version)
    // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
       enabled: false,
        runs: 200
      },
     //evmVersion: "byzantium"
      }
    }
  }
}