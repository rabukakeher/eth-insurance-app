const CustomToken = artifacts.require("CustomToken");
const Onboarding = artifacts.require("Onboarding");
const PremiumCollector = artifacts.require("PremiumCollector");
const ClaimManager = artifacts.require("ClaimManager");
const InsuranceManager = artifacts.require("InsuranceManager");


// all the hardcoded addres chaould change based on the address on the local bloackchain where the tests are run
contract("CustomToken", (accounts) => {
    before(async () => {
        customToken = await CustomToken.deployed()
        onboarding = await Onboarding.deployed()
        premiumCollector = await PremiumCollector.deployed()
        claimManager = await ClaimManager.deployed()
        insuranceManager = await InsuranceManager.deployed()
    })

    it('check start balance of token', async () => {
        await customToken.transfer("0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194", 50)
        await customToken.transfer(customToken.address, 50)
        let balance = await customToken.balanceOf("0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194")
        assert.equal(balance, 50, 'The initial supply should be 50')
    })

    it('check onboarding', async () => {
        console.log("onboarding: ", onboarding.address);
        
    })

    it('check premiumCollector', async () => {
        console.log("Premium Collector: " ,premiumCollector.address)
    })

    it('check ClaimManager', async () => {
        console.log("Claim Manager: ", claimManager.address)
    })

    it('check InsuranceManager', async () => {
        console.log("Insurance Manager: " ,insuranceManager.address)

        await insuranceManager.onboardUser("0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194", 50).then((policy) => {
            console.log("User Onboarded: \n", policy.logs[0].args);
        })

    })

})