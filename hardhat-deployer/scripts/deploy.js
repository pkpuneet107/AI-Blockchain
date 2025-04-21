const hre = require("hardhat");

async function main() {
  const AuditLog = await hre.ethers.getContractFactory("AuditLog");
  const auditLog = await AuditLog.deploy();         // deploy the contract
  await auditLog.waitForDeployment();               // use this instead of .deployed() in latest Hardhat
  const address = await auditLog.getAddress();      // get the address

  console.log("✅ Contract deployed to:", address);
  console.log("ABI:", JSON.stringify(AuditLog.interface.formatJson()));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
