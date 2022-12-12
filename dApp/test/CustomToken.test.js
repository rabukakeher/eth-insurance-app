const CustomToken = artifacts.require("CustomToken");
const Onboarding = artifacts.require("Onboarding");
const PremiumCollector = artifacts.require("PremiumCollector");
const ClaimManager = artifacts.require("ClaimManager");
const InsuranceManager = artifacts.require("InsuranceManager");

const testUserAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";

// all the hardcoded addres should change based on the address on the local bloackchain where the tests are run
contract("CustomToken", (accounts) => {
    before(async () => {
        customToken = await CustomToken.deployed()
        onboarding = await Onboarding.deployed()
        premiumCollector = await PremiumCollector.deployed()
        claimManager = await ClaimManager.deployed()
        insuranceManager = await InsuranceManager.deployed()
    })

    it('check start balance of token', async () => {
        await customToken.transfer(testUserAddress, 50)
        await customToken.transfer(customToken.address, 50)
        let balance = await customToken.balanceOf(testUserAddress)
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

        let policyOnboarded = await insuranceManager.onboardUser(testUserAddress, 50);
        let policyRetrieved = await insuranceManager.getUserPolicy(testUserAddress);

        insuranceManager.payPremium(testUserAddress, 5);

        policyOnboarded = policyOnboarded.logs[0].args;
        policyRetrieved = policyRetrieved.logs[0].args;

        //console.log("Policy on boardning: \n", policyOnboarded);
        //console.log("Policy on retreival: \n", policyRetrieved);

        assert(policyOnboarded, policyRetrieved);
    })

    it('test claims approval', async () => {

        let policyOnboarded = await insuranceManager.onboardUser(testUserAddress, 50);
        let policyRetrieved = await insuranceManager.getUserPolicy(testUserAddress);

        insuranceManager.payPremium(testUserAddress, 5);

        policyOnboarded = policyOnboarded.logs[0].args;
        policyRetrieved = policyRetrieved.logs[0].args;

        //console.log("Policy on boardning: \n", policyOnboarded);
        //console.log("Policy on retreival: \n", policyRetrieved);


        await insuranceManager.requestClaim(testUserAddress, 40);
        let claimRequest = await insuranceManager.getClaimStatus(testUserAddress);

        console.log("Claim Status before status update : \n", claimRequest.logs[0].args);

        await insuranceManager.approveClaimRequest(testUserAddress);

        claimRequest = await insuranceManager.getClaimStatus(testUserAddress);
        console.log("Claim Status after status update : \n", claimRequest.logs[0].args);

    })

})