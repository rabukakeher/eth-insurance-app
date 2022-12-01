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
    
    function onboardUser(address userAddress, uint amountInsured) public returns (Onboarding.Policy memory policy) {
        return onboarding.onboardUser(userAddress, amountInsured);
    }

    function payPremium(address userAddress, uint amount) public {
        premiumCollector.pay(userAddress, amount);
    }

    function requestClaim(address userAddress, uint amountClaimed) public {
        claimManager.requestClaim(userAddress, amountClaimed);
    }

}