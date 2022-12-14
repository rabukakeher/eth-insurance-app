// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

contract ClaimManager {
    
    mapping(address => ClaimRequest) claims;

    struct ClaimRequest {
        address userAddress;
        uint amountClaimed;
        uint amountApproved;
        bool isApproved;
        string comment;
    }
    
    function requestClaim(address userAddress, uint amountClaimed) public {
        //check if the user owns a policy
        claims[userAddress] = ClaimRequest(userAddress, amountClaimed, 0, false, "Under Review");
    }

    function approveClaimRequest(address userAddres) public {
        ClaimRequest memory claimRequest = claims[userAddres];

        claimRequest.isApproved = true;
        claimRequest.amountApproved = (claimRequest.amountClaimed * 8) / 10;
        claimRequest.comment = "Claim request Approved";
        
        claims[userAddres] = claimRequest;
    }

    function declineClaimRequest(address userAddress, string memory reason) public {
        ClaimRequest memory claimRequest = claims[userAddress];

        claimRequest.isApproved = false;
        claimRequest.comment = reason;
        
        claims[userAddress] = claimRequest;
    }

    function getClaim(address userAddress) public view returns (ClaimRequest memory claimRequest){
        claimRequest = claims[userAddress];
    }

}