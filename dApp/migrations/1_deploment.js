// Fetch the Storage contract data from the Storage.json file
var CustomToken = artifacts.require("./../contracts/CustomToken.sol");
var Onboarding = artifacts.require("./../contracts/Onboarding.sol");
var PremiumCollector = artifacts.require("./../contracts/PremiumCollector.sol");
var ClaimManager = artifacts.require("./../contracts/ClaimManager.sol");
var InsuranceManager = artifacts.require("./../contracts/InsuranceManager.sol");


// JavaScript export
module.exports = (deployer) => {
    // Deployer is the Truffle wrapper for deploying
    // contracts to the network

    // Deploy the contract to the network
    deployer.deploy(CustomToken, 'RabuToken', 500).then((customToken) => {
        return deployer.deploy(Onboarding).then((onboarding) => {
            return deployer.deploy(PremiumCollector, customToken.address).then((premiumCollector) => {
                return deployer.deploy(ClaimManager).then((claimManager) => {
                    return deployer.deploy(InsuranceManager, onboarding.address, claimManager.address, premiumCollector.address);
                });
            });
        });
    });
    
}