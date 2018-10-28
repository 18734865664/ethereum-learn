pragma solidity ^0.4.0;

contract demo1 {
    string msg;
    constructor(string arg){
       msg = arg;
    }

    function getMsg() returns(string){
        return msg;
    }

    function setMsg(string arg) {
        msg = arg;
    }
}
