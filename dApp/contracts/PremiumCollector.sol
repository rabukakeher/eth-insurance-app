// SPDX-License-Identifier: UNLICENSED

import "./CustomToken.sol";

pragma solidity >=0.7.0 <0.9.0;

contract PremiumCollector {
    CustomToken customToken;

    constructor (address customTokenAddr) {
        customToken = CustomToken(customTokenAddr);
    }
    
    function pay(address userAddress, uint amount) public {
        //transfer from company's account into the user's account

        address from = userAddress;
        address to = msg.sender;//company address here
        customToken.transferFrom(from, to, amount);
    }
}