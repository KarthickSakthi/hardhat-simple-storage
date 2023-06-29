const hre = require("hardhat");



async function  deploy(){

  const simpleStorageFactory = await hre.ethers.deployContract("SimpleStorage");
  await simpleStorageFactory.waitForDeployment();
  console.log("Deploying....");
  // const simpleStorage = (await simpleStorageFactory.deploy()).waitForDeployment();
  console.log(`Deployed contract to ${await simpleStorageFactory.getAddress() }`)

  console.log("network config", hre.network.config)

  if(hre.network.config.chainId === 4 && ETHERSCAN_API_KEY ){
    await simpleStorageFactory.deploymentTransaction().wait(2);
    await verify(simpleStorageFactory.getAddress(),[])
  }


}

async function verify(contractAddress, args){
  console.log("Verifying contract");
  try{
   await hre.run("verify:verify",{
    address: contractAddress,
    constructorArguments: args
   })
  }
  catch(e){
    if(e.message.toLowerCase().includes("already verified")){
      console.log("Already Verified")
    }
    else{
      console.log("Contract Verification Error: ",e)
    }

  }
}

deploy().then(()=> process.exit(0)).catch((error)=>{ console.error(error); process.exit(1)});