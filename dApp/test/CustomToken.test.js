const CustomToken = artifacts.require("CustomToken");
const Onboarding = artifacts.require("Onboarding");
const PremiumCollector = artifacts.require("PremiumCollector");
const ClaimManager = artifacts.require("ClaimManager");
const InsuranceManager = artifacts.require("InsuranceManager");
const userAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";


// all the hardcoded address could change based on the address on the local blockchain where the tests are run
contract("CustomToken", (accounts) => {
    before(async () => {
        customToken = await CustomToken.deployed()
        onboarding = await Onboarding.deployed()
        premiumCollector = await PremiumCollector.deployed()
        claimManager = await ClaimManager.deployed()
        insuranceManager = await InsuranceManager.deployed()
    })

// do we need call CustomToken's constructor??
//    it('the token\'s initial supply', async() => {
//    })

    it('check start balance of token', async () => {
        await customToken.transfer(userAddress, 50)
        await customToken.transfer(customToken.address, 50)
        let balance = await customToken.balanceOf(userAddress)
        assert.equal(balance, 50, 'The initial supply should be 50')
    })

    it('check onboarding', async () => {
        console.log("onboarding: ", onboarding.address);
    })

    it('check premiumCollector', async () => {
        console.log("Premium Collector: ", premiumCollector.address)
    })

    it('check ClaimManager', async () => {
        console.log("Claim Manager: ", claimManager.address)
    })

    it('check InsuranceManager', async () => {
        console.log("Insurance Manager: ", insuranceManager.address)

        let policyOnboarded = await insuranceManager.onboardUser("0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194", 50);
        let policyRetrieved = await insuranceManager.getUserPolicy("0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194");

        policyOnboarded = policyOnboarded.logs[0].args;
        policyRetrieved = policyRetrieved.logs[0].args;

        console.log("Policy on boarding: \n", policyOnboarded);
        console.log("Policy on retrieval: \n", policyRetrieved);

        assert.equal(policyOnboarded, policyRetrieved);
    })

})