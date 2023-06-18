const hre = require("hardhat");

async function  deploy(){

  const simpleStorageFactory = await hre.ethers.deployContract("SimpleStorage");
  await simpleStorageFactory.waitForDeployment();
  console.log("Deploying....");
  // const simpleStorage = (await simpleStorageFactory.deploy()).waitForDeployment();
  console.log(`Deployed contract to ${await simpleStorageFactory.getAddress() }`)

}

deploy().then(()=> process.exit(0)).catch((error)=>{ console.error(error); process.exit(1)});