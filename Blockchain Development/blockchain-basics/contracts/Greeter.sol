// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Greeter {
    string public greeting;
    string public message; // New state variable

    constructor() {
        greeting = "Hello, Blockchain";
        message = "Welcome to Hardhat"; // Initialize with a default
    }

    // Function to set a new greeting
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // Function to set a new message
    function setMessage(string memory _message) public {
        message = _message;
    }

    // Function to get the current greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    // Function to get the current message
    function getMessage() public view returns (string memory) {
        return message;
    }
}