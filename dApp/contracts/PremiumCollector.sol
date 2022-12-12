// SPDX-License-Identifier: UNLICENSED

import "./CustomToken.sol";

pragma solidity >=0.7.0 <0.9.0;

contract PremiumCollector {
    CustomToken customToken;

    constructor (address customTokenAddr) {
        customToken = CustomToken(customTokenAddr);
    }

    // transfer token/ monthly payment from the user's account into company's account
    function pay(address userAddress, uint amount) public {
        address from = userAddress;
        address to = msg.sender; // company address here
        customToken.transferFrom(from, to, amount);
    }
}