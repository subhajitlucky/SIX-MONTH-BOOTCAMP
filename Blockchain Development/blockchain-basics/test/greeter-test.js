const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter Contract", function () {
  let greeter;
  let owner;

  // Deploy a new contract before each test
  beforeEach(async function () {
    // Get the ContractFactory and Signers
    const Greeter = await ethers.getContractFactory("Greeter");
    [owner] = await ethers.getSigners();
    greeter = await Greeter.deploy();
  });

  describe("Initialization", function () {
    it("Should return the correct default greeting", async function () {
      expect(await greeter.getGreeting()).to.equal("Hello, Blockchain");
    });

    it("Should return the correct default message", async function () {
      expect(await greeter.getMessage()).to.equal("Welcome to Hardhat");
    });
  });

  describe("Setting new values", function () {
    it("Should update greeting when setGreeting is called", async function () {
      const newGreeting = "Hello, World!";
      await greeter.setGreeting(newGreeting);
      expect(await greeter.getGreeting()).to.equal(newGreeting);
    });

    it("Should update message when setMessage is called", async function () {
      const newMessage = "Testing is important";
      await greeter.setMessage(newMessage);
      expect(await greeter.getMessage()).to.equal(newMessage);
    });
  });

  describe("Direct state variable access", function () {
    it("Should access greeting directly through public variable", async function () {
      expect(await greeter.greeting()).to.equal("Hello, Blockchain");
    });

    it("Should access message directly through public variable", async function () {
      expect(await greeter.message()).to.equal("Welcome to Hardhat");
    });
  });
});
