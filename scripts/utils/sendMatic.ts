import hardhat from "hardhat";
import { Contract } from "@ethersproject/contracts";
const { run, ethers } = hardhat;

let amountToSend = ethers.utils.parseEther("0.195");
async function main(): Promise<void> {
  const [deployer, pippo, pluto, uracicle, account6, account3] =
    await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  let tx;
  tx = await pippo.sendTransaction({
    to: deployer.address,
    value: amountToSend, // Sends Matic
  });
  await tx.wait();

  tx = await pluto.sendTransaction({
    to: deployer.address,
    value: amountToSend, // Sends Matic
  });
  await tx.wait();

  tx = await uracicle.sendTransaction({
    to: deployer.address,
    value: amountToSend, // Sends Matic
  });
  await tx.wait();

  tx = await account6.sendTransaction({
    to: deployer.address,
    value: amountToSend, // Sends Matic
  });
  await tx.wait();

  tx = await account3.sendTransaction({
    to: deployer.address,
    value: amountToSend, // Sends Matic
  });
  await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
