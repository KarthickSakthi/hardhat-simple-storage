const hre = require("hardhat");


const ETHERSCAN_API_KEY = ""

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function  deploy(){

  const simpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage");
  const simplestorage =  await simpleStorageFactory.deploy();
  // console.log("simpleStorageFactory",await simpleStorageFactory)
   await simplestorage.deploymentTransaction().wait(5);
 
  console.log("Deploying....",await simplestorage.getAddress());
  // const simpleStorage = (await simpleStorageFactory.deploy()).waitForDeployment();
  // console.log(`Deployed contract to ${ simplestorage }`)

  // console.log("network config", hre.network.config)

  if(hre.network.config.chainId === 80001 && ETHERSCAN_API_KEY ){
    console.log("waiting for confirmation")
    // await simpleStorageFactory.deploymentTransaction(6);
    // await delay(60000);
    await sleep(30 * 1000);
    await verify(await simplestorage.getAddress(),[])
  }

  const currentValue = await simpleStorageFactory.retrieve();
  console.log(`Current Valur is: ${currentValue}`);

  // update value
  const transactionResponse = await simpleStorageFactory.store(10);
  await transactionResponse.wait(1);
   const newCurrentValue = await simpleStorageFactory.retrieve();
   console.log(`Newly update current value is ${newCurrentValue}`)

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