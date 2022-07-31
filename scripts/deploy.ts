import { ethers } from "hardhat";

async function main() {
  const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
  const zombieFactory = await ZombieFactory.deploy();

  await zombieFactory.deployed();

  console.log("Lock with 1 ETH deployed to:", zombieFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
