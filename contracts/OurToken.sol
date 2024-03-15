 // SPDX-License-Identifier: MIT
 pragma solidity ^0.8.7;

 import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 contract OurToken is ERC20 {

    constructor(uint256 initSupply, string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, initSupply);
    }
 }