
var ZOE = artifacts.require("./ZOE.sol");

const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const name = "ZED";
const symbol = "ZED";

module.exports = async function (deployer) {
  await deployProxy(ZOE, [name,symbol], { deployer, initializer: 'initialize' });
};

