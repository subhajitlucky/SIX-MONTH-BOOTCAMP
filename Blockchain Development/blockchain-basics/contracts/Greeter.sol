// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Greeter {
    string public greeting;
    string public message; // New state variable

    constructor() {
        greeting = "Hello, Blockchain";
        message = "Welcome to Hardhat"; // Initialize with a default
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}