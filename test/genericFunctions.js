const { expect, use } = require("chai");
const { waffle, ethers } = require("hardhat");

const GenericFunctionTest = require("../artifacts/contracts/GenericFunctionTest.sol/GenericFunctionTest.json");
const BalanceTest = require("../artifacts/contracts/BalanceTest.sol/BalanceTest.json");

const { deployContract, provider, solidity } = waffle;

use(solidity);

describe("Orca Tests", () => {
  const [admin, host, member, other] = provider.getWallets();

  let genericFunctionTest;
  let balanceTest;

  it("should deploy contracts", async () => {
    balanceTest = await deployContract(admin, BalanceTest);
    genericFunctionTest = await deployContract(admin, GenericFunctionTest, [balanceTest.address]);
  });
});
