const CustomToken = artifacts.require("CustomToken");
const Onboarding = artifacts.require("Onboarding");
const PremiumCollector = artifacts.require("PremiumCollector");
const ClaimManager = artifacts.require("ClaimManager");
const InsuranceManager = artifacts.require("InsuranceManager");
const userAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";

// all the hardcoded address could change based on the address on the local blockchain where the tests are run
contract("InsuranceManager", (accounts) => {
    before(async () => {
        customToken = await CustomToken.deployed()
        onboarding = await Onboarding.deployed()
        premiumCollector = await PremiumCollector.deployed()
        claimManager = await ClaimManager.deployed()
        insuranceManager = await InsuranceManager.deployed()
    })

    it('check InsuranceManager', async () => {
        console.log("Insurance Manager: ", insuranceManager.address)
    })

    it('check onboardUser and getUserPolicy functions', async () => {

        let policyOnboarded = await insuranceManager.onboardUser(userAddress, 50);
        let policyRetrieved = await insuranceManager.getUserPolicy(userAddress);

        policyOnboarded = policyOnboarded.logs[0].args;
        policyRetrieved = policyRetrieved.logs[0].args;

        console.log("Policy on boarding: \n", policyOnboarded);
        console.log("Policy on retrieval: \n", policyRetrieved);

        assert.equal(policyOnboarded, policyRetrieved);
    })

    it('pay for the monthly payment', async () => {
        let policy = insuranceManager.getUserPolicy(userAddress);
        let amountNeedToPay = policy.amountDueEveryMonth;
        let payment = await insuranceManager.payPremium(userAddress, amountNeedToPay);
        let paid = payment.logs[0].args;
        assert.equal(payment, paid);
    })

})