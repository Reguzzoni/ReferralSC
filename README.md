# Referral Smart Contract


## COMMANDS

### GANACHE

ganache-cli -b

### DEPLOY

npx hardhat run .\scripts\deploy\1_deployReferralContract.ts --network ganache

### TEST

#### SMART COIN

npx hardhat test .\test\referral\1_referralTest.ts
