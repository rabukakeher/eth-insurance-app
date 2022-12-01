const CustomToken = artifacts.require("CustomToken");
const Onboarding = artifacts.require("Onboarding");
const PremiumCollector = artifacts.require("PremiumCollector");
const ClaimManager = artifacts.require("ClaimManager");
const InsuranceManager = artifacts.require("InsuranceManager");

contract("CustomToken", (accounts) => {
    before(async () => {
        customToken = await CustomToken.deployed()
        onboarding = await Onboarding.deployed()
        premiumCollector = await PremiumCollector.deployed()
        claimManager = await ClaimManager.deployed()
        insuranceManager = await InsuranceManager.deployed()
    })

    it('check start balance of token', async () => {
        await customToken.transfer(customToken.address, 50)
        let balance = await customToken.balanceOf(customToken.address)
        assert.equal(balance, 50, 'The initial supply should be 50')
    })

    it('check onboarding', async () => {
        console.log("onboarding: ", onboarding.address)
    })

    it('check premiumCollector', async () => {
        console.log("Premium Collector: " ,premiumCollector.address)
    })

    it('check ClaimManager', async () => {
        console.log("Claim Manager: ", claimManager.address)
    })

    it('check InsuranceManager', async () => {
        console.log("Insurance Manager: " ,insuranceManager.address)
    })

})