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

    function onboardUser(address userAddress, uint amountInsured) external {
         Onboarding.Policy memory policy = onboarding.onboardUser(userAddress, amountInsured);

         emit UserPolicy(userAddress, policy.name, policy.amountInsured, policy.amountDueEveryMonth);
    }

    function getUserPolicy(address userAddress) external {
        Onboarding.Policy memory policy = onboarding.gerUserPolicy(userAddress);

        emit UserPolicy(userAddress, policy.name, policy.amountInsured, policy.amountDueEveryMonth);
    }

    function payPremium(address userAddress, uint amount) public {
        premiumCollector.pay(userAddress, amount);
    }

    function requestClaim(address userAddress, uint amountClaimed) public {
        claimManager.requestClaim(userAddress, amountClaimed);
    }
}