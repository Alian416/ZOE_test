
// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x50ab2e65F5b0B76f5418c92279072F4EE7819DB2';
   
    const ZOEv2 = await ethers.getContractFactory("ZOEv2");
    console.log("Preparing upgrade...");
    const zoeV2Address = await upgrades.prepareUpgrade(proxyAddress, ZOEv2);
    console.log("ZOEv2 at:", zoeV2Address);
  
   
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });