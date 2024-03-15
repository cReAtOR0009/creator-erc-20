 // SPDX-License-Identifier: MIT

 // SPDX-License-Identifier: SEE LICENSE IN LICENSE
 pragma solidity ^0.8.7;

 import "@openzeppelin/contracts/token/ERC20/ERC20.sol"

 contract OurToken is ERC2 {

    constructor(uint256 initSupply) ERC20("OurToken", "OT") {
        _mint(msg.sender, initSupply);
    }
 }