const Onboarding = artifacts.require("Onboarding");
const userAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";

contract("Onboarding", (accounts) => {
    before(async () => {
        onboarding = await Onboarding.deployed()
    })

    console.log("On board address: ", onboarding.address)
    it('user onboarding', async () => {
        let policy = await onboarding.onboardUser(userAddress, 100);
        assert.equal(onboarding.userPolicies[userAddress], policy);
    })

    it('get a policy the user get', async () => {
        let policy = await onboarding.gerUserPolicy(userAddress);
        assert.equal(policy.amountInsured, 100);
        assert.equal(policy.amountDueEveryMonth, 20/12)
    })
})