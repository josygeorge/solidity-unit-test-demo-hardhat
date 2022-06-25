const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
  it("Should return the sum of two numbers", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    const contract = await greeter.deployed();
    const testSumOfNums = await contract.addNum(2, 6);
    expect(testSumOfNums).to.equal(8);
  });
  it("Should return the difference of two numbers", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    const contract = await greeter.deployed();
    const testDiffOfNums = await contract.subtractNum(2, 6);
    expect(testDiffOfNums).to.equal(-4);
  });
});
