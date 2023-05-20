import hardhat from "hardhat";
import { Contract } from "@ethersproject/contracts";
const { ethers } = hardhat;

let referalContract: Contract;
const ADDRESS_CONTRACT = "";

async function main(): Promise<void> {
    const [deployer, user1, user2] = await ethers.getSigners();
    referalContract = await ethers.getContractAt("Referral", ADDRESS_CONTRACT);

    let trx = await referalContract.connect(user2).referee(user1.address);

    let receipt = await trx.wait();
    console.log("Gas used to refer user2:", receipt.gasUsed.toString());
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
