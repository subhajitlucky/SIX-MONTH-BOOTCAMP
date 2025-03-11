const { ethers, run } = require('hardhat');

async function main() {
    // Compile the contract
    await run('compile');
    
    // Get the contract factory
    const Greeter = await ethers.getContractFactory('Greeter');
    
    // Deploy the contract and wait for it to be mined
    const greeter = await Greeter.deploy();
    await greeter.waitForDeployment(); // Wait for the deployment transaction to be mined
    
    // Get the contract address after deployment is confirmed
    const address = await greeter.getAddress();
    console.log('Greeter deployed to:', address);
    
    // Interact with the contract
    console.log('Initial greeting:', await greeter.getGreeting());
    console.log('Initial message:', await greeter.getMessage());
    
    // Update values
    const setGreetingTx = await greeter.setGreeting('Hello, Local Network!');
    await setGreetingTx.wait();
    console.log('Updated greeting:', await greeter.getGreeting());
    
    const setMessageTx = await greeter.setMessage('Deployed successfully!');
    await setMessageTx.wait();
    console.log('Updated message:', await greeter.getMessage());
}

// Run the deployment
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });