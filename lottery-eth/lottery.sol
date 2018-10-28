pragma solidity ^0.4.0;

contract lottery {
    address menager;

    address[] players;

    address winner;

    uint round;

    constructor()public payable{
        menager = msg.sender;
    }

    function ()public payable{

    }

    modifier checkOwner {
        require(menager == msg.sender, "you are not a administration");
        _;
    }

    modifier checkPlayer{
        require(msg.value == 1 ether, "allow send 1 ether");
        _;
    }

    function play() public payable checkPlayer{
        players.push(msg.sender);

    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }
}
