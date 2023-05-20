import hardhat from "hardhat";
import { Assertion, expect } from "chai";
import { Contract } from "@ethersproject/contracts";
import { describe } from "mocha";
import base = Mocha.reporters.base;
const { ethers } = hardhat;

let referralContract: Contract;

let deployer: any;
let user1: any;
let user2: any;
let user3: any;

before(async function () {
    [deployer, user1, user2, user3] = await ethers.getSigners();

    // test
    const referralFactory = await ethers.getContractFactory("Referral");
    referralContract = await referralFactory.deploy();
    await referralContract.deployed();

    console.log("referralContract deployed to:", referralContract.address);
});

describe("referralTest", function () {
    describe("Referee", function () {
        it("User2 referred by user1", async function () {
            let trx = await referralContract.connect(user2).referee(user1.address);
            let receipt = await trx.wait();
            console.log("Gas used:", receipt.gasUsed.toString());
            console.log("User Info:", await referralContract.userInfo(user2.address));
            expect((await referralContract.userInfo(user2.address)).referredBy).to.equal(user1.address);
        });
    });
    describe("Referee", function () {
        it("User3 referred by user1", async function () {
            let trx = await referralContract.connect(user3).referee(user1.address);
            let receipt = await trx.wait();
            console.log("Gas used:", receipt.gasUsed.toString());
            console.log("User Info:", await referralContract.userInfo(user3.address));
            expect((await referralContract.userInfo(user3.address)).referredBy).to.equal(user1.address);
        });
    });
});
