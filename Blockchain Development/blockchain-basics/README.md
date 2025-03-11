# Blockchain Basics

This project demonstrates the basics of blockchain development using Hardhat, a development environment for Ethereum software. The project includes a simple smart contract called `Greeter` that allows users to set and get greeting messages.

## Project Structure

- `contracts/Greeter.sol`: The smart contract written in Solidity.
- `scripts/deploy.js`: The deployment script to deploy the `Greeter` contract to a local blockchain network.
- `test/greeter-test.js`: Test cases for the `Greeter` contract using Hardhat and Chai.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Compile the smart contract:
   ```sh
   npx hardhat compile
   ```

3. Run the local blockchain network:
   ```sh
   npx hardhat node
   ```

4. Deploy the contract to the local network:
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. Run the tests:
   ```sh
   npx hardhat test
   ```

## License

This project is licensed under the MIT License.