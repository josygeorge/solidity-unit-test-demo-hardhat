const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {

  let contract;
  let owner;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    contract = await greeter.deployed();
    [owner] = await ethers.getSigners();
  });

  /* it("Should return the new greeting once it's changed", async function () {


    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  }); */

  it("Should return the sum of two numbers", async function () {
    const testSumOfNums = await contract.addNum(2, 6);
    expect(testSumOfNums).to.equal(8);
  });
  it("Should return the difference of two numbers", async function () {
    const testDiffOfNums = await contract.subtractNum(2, 6);
    expect(testDiffOfNums).to.equal(-4);
  });
});
