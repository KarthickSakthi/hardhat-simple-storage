const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("This is testing scope of Simple Store", function(){
  beforeEach( async function(){
    let simpleStorage, signer ;

    let simpleStorageFactory = await ethers.deployContract("SimpleStorage");
    simpleStorage = await simpleStorageFactory.waitForDeployment(6);
    signer = ethers.getSigner();
  })

  it("intial value should be 0", async function(){
    let expectedValue ="0";
    let currentStoredValue = await simpleStorage.retrive();
    expect(currentStoredValue.toString()).to.equal(expectedValue);
  })

  it("stored value is correct", async function(){
    let expectedValue ="1";
    let storeValue = await simpleStorage.store(1);
    await storeValue.wait(6);
    let currentStoredValue = await simpleStorage.retrive();
    expect(currentStoredValue.toString()).to.equal(expectedValue);
  })
})