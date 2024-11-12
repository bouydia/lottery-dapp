//SPDX-License-Identifier:MIT

pragma solidity ^0.8.28;
import {Script} from "forge-std/Script.sol" ;
import {VRFCoordinatorV2Mock} from "@chainlink/contracts/src/v0.8/vrf/mocks/VRFCoordinatorV2Mock.sol" ;
contract HelperConfig is Script {
    struct NetworkConfig {
         uint256 subscriptionId;
        bytes32 gasLane; 
        uint256 interval;
        uint256 entranceFee;
        uint32 callbackGasLimit;
        address vrfCoordinatorV2;
    }
    NetworkConfig public activeNetworkConfig;
    
    constructor () {
        if(block.chainid == 11155111){
            activeNetworkConfig = getSeploiaEthConfig();
        }else {
            activeNetworkConfig = getOrCreateAnvilEthConfig();
        }
    }
    
    function getSeploiaEthConfig() public pure  returns (NetworkConfig memory){
        return NetworkConfig({
            entranceFee:0.01 ether,
            interval :30 , 
            vrfCoordinatorV2 : 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B , 
            gasLane : 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae , 
            subscriptionId : 0 , //update this with our sub id
            callbackGasLimit : 5000000 
        }) ;
    }
    function getOrCreateAnvilEthConfig() public view returns (NetworkConfig memory){
        if(activeNetworkConfig.vrfCoordinatorV2 != address(0)){
            return activeNetworkConfig ;
        }
        uint96  baseFee = 0.25 ether ; //0.5LIMK
        uint96 gasPriceLink =1e9 ; //1 gwei LINK
        vm.startBroadcast() ;
        VRFCoordinatorV2Mock  vrfCoordinatorMock = new VRFCoordinatorV2Mock(baseFee,gasPriceLink) ;
        vm.stopBroadcast() ;
        
        return NetworkConfig({
            entranceFee:0.01 ether,
            interval :30 , 
            vrfCoordinatorV2 : address(vrfCoordinatorMock) , 
            gasLane : 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae , 
            subscriptionId : 0 , //our sccript will add this
            callbackGasLimit : 5000000 
        }) ; 
        
    }
}