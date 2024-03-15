const { network } = require("hardhat")
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config")
const { verifyContract } = require("../helper-functions")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const ourToken = await deploy("OurToken", {
    from: deployer,
    args: [INITIAL_SUPPLY, "Creator", "CT"],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: network.config.blockConfirmations || 1,
  })
  log(`ourToken deployed at ${ourToken.address}`)

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
    ) {
      console.log("contract has to be on sepolia or a live test Network since it's not found in development chain array")
      console.log("verifying contract on testnet")
    await verifyContract(ourToken.address, [INITIAL_SUPPLY, "Creator", "CT"])
  }
}

module.exports.tags = ["all", "token"]