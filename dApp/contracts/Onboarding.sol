// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

contract Onboarding {

    mapping(address => Policy) userPolicies;
    
    struct Policy {
        string name;
        uint amountInsured;
        uint amountDueEveryMonth;
    }

    // Every user pays a premium of 20 percent of the amount he/she insures for one year
    function onboardUser(address userAddress, uint amountInsured) public returns (Policy memory policy) {
        uint premium = (amountInsured * 2) / 10;
        uint amountDuePerMonth = premium / 12;
        if(amountDuePerMonth < 1) {
            amountDuePerMonth = 1;
        }
        
        policy = Policy("The First Policy", amountInsured, amountDuePerMonth);
        userPolicies[userAddress] = policy;

        return policy;
    }

    function gerUserPolicy(address userAddress) view public returns (Policy memory policy){
        return userPolicies[userAddress];
    }
}