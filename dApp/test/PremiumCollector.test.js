const PremiumCollector = artifacts.require("PremiumCollector");
const userAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";

// all the hardcoded address could change based on the address on the local blockchain where the tests are run
contract("PremiumCollector", (accounts) => {
    before(async () => {
        premiumCollector = await PremiumCollector.deployed()
    })

    console.log("Premium Collector Address: ", premiumCollector.address);

    it('check user\'s balance after transfer', async () => {
        let balance_old = premiumCollector.customToken.balanceOf(userAddress);
        await premiumCollector.pay(userAddress, 10);
        let balance_new = await premiumCollector.customToken.balanceOf(userAddress)
        assert.equal(balance_old - balance_new, 10)
    })

}) 