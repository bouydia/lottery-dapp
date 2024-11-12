//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;
import {Script} from "forge-std/Script.sol" ;
import {Raffle} from "../src/Raffle" ;
contract DeployRaffle is Script {
     function run() external returns(Raffle){
        Raffle raffle = new Raffle() ;
     }
}