const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter Contract", function () {
  it("Should return the correct greeting", async function () {
    // Get the ContractFactory and Signers here.
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
   

    // Call the getGreeting function
    expect(await greeter.getGreeting()).to.equal("Hello, Blockchain!");
  });
});
