// SPDX-License-Identifier: UNLICENSED

import "./Onboarding.sol";
import "./ClaimManager.sol";
import "./PremiumCollector.sol";

pragma solidity >=0.7.0 <0.9.0;

contract InsuranceManager {
    Onboarding onboarding;
    ClaimManager claimManager;
    PremiumCollector premiumCollector;

    constructor (address onboardingAddr, address claimManagerAddr, address premiumCollectorAddr) {
        onboarding = Onboarding(onboardingAddr);
        claimManager = ClaimManager(claimManagerAddr);
        premiumCollector = PremiumCollector(premiumCollectorAddr);
    }

    event UserPolicy (
        address userAddress,
        string policyName,
        uint amountInsured,
        uint amountDueEveryMonth
    );

    event ClaimRequest (
        address userAddress,
        uint amountClaimed,
        uint amountApproved,
        bool isApproved,
        string comment
    );

    function onboardUser(address userAddress, uint amountInsured) external returns (Onboarding.Policy memory policy) {
         policy = onboarding.onboardUser(userAddress, amountInsured);
    }

    function getUserPolicy(address userAddress) external view returns (Onboarding.Policy memory policy)  {
        policy = onboarding.gerUserPolicy(userAddress);
    }

    function payPremium(address userAddress, uint amount) external {
        premiumCollector.pay(userAddress, amount);
    }

    function requestClaim(address userAddress, uint amountClaimed) external {
        claimManager.requestClaim(userAddress, amountClaimed);
    }

    function approveClaimRequest(address userAddress) external {
        claimManager.approveClaimRequest(userAddress);
    }

    function declineClaimRequest(address userAddress, string memory reason) external {
        claimManager.declineClaimRequest(userAddress, reason);
    }

    function getClaimStatus(address userAddress) external view returns (ClaimManager.ClaimRequest memory claimRequest) {
        claimRequest = claimManager.getClaim(userAddress);
    }
}