// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

contract ClaimManager {
    
    mapping(address => ClaimRequest) public claims;

    struct ClaimRequest {
        address userAddress;
        uint amountClaimed;
        uint amountApproved;
        bool isApproved;
        string comment;
    }

    // user requests some claim
    function requestClaim(address _userAddress, uint _amountClaimed) public {
        claims[_userAddress] = ClaimRequest(_userAddress, _amountClaimed, 0, false, "Under Review");
    }

    function approveClaimRequest(address _userAddress) public {
        ClaimRequest memory claimRequest = claims[_userAddress];

        claimRequest.isApproved = true;
        claimRequest.amountApproved = (claimRequest.amountClaimed * 8) / 10;
        claimRequest.comment = "Claim request Approved";
        
        claims[_userAddress] = claimRequest;
    }

    function declineClaimRequest(address _userAddress, string memory reason) public {
        ClaimRequest memory claimRequest = claims[_userAddress];

        claimRequest.isApproved = false;
        claimRequest.comment = reason;
        
        claims[_userAddress] = claimRequest;
    }

}