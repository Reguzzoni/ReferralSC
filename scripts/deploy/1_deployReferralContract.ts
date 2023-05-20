import hardhat from "hardhat";
import { Contract } from "@ethersproject/contracts";
const { ethers } = hardhat;

let referralContract: Contract;

async function main(): Promise<void> {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const referralFactory = await ethers.getContractFactory("Referral");
    referralContract = await referralFactory.deploy();
    await referralContract.deployed();

    console.log("referralContract contract deployed to: ", referralContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
