// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;
contract CustomToken {
  uint _totalSupply = 0;
  string _symbol;
  mapping(address => uint) balances;

  constructor(string memory symbol, uint256 initialSupply) {
    _symbol = symbol;
    _totalSupply = initialSupply;
    balances[msg.sender] = _totalSupply;
  }

  function transfer(address receiver, uint amount) public returns (bool) {
    require(amount <= balances[msg.sender], "Not enough balnace in sender's account.");
    balances[msg.sender] = balances[msg.sender] - amount;
    balances[receiver] = balances[receiver] + amount;
    return true;
  }

  function balanceOf(address account) public view returns(uint256){
    return balances[account];
  }

  function transferFrom(address from, address to, uint256 amount) external returns (bool){
      require(balances[from] >= amount, "Not enough balnace in sender's account.");
      balances[from] = balances[from] - amount;
      balances[to] = balances[to] + amount;
      return true;
  }

  }
