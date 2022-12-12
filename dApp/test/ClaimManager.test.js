const ClaimManager = artifacts.require("ClaimManager");
const userAddress = "0xf3f2216eD7d42E7e0D88874F59f8763bFAe3b194";

contract("ClaimManager", (accounts) => {
    before(async () => {
        claimManager = await ClaimManager.deployed()
    })

    console.log("Claim Manager: ", claimManager.address)

    it('request a claim', async () => {
        let result = await claimManager.requestClaim(userAddress, 100);
        assert.equal(claimManager.claims[userAddress], ClaimRequest(userAddress, 10, 0, false, "Under Review"));
        })

    it('approve a claim', async () => {
        let result = await claimManager.approveClaimRequest(userAddress);
        let approvedClaim = claimManager.claims[userAddress];
        assert.equal(approvedClaim.isApproved, true);
        assert.equal(approvedClaim.amountApproved, 8);
    })


    it('decline a claim', async () => {
        let result = await claimManager.declineClaimRequest(userAddress, "Not a trusted user");
        let declinedClaim = claimManager.claims[userAddress];
        assert.equal(declinedClaim.isApproved, false);
        assert.equal(declinedClaim.reason, "Not a trusted user");
    })
})