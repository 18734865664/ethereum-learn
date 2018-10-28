const Web3 = require("web3")


const web3 = new Web3("http://127.0.0.1:8545")

let {interface, bytecode} = require("./compile")

let myCt
let contractAddr
let account

deploy = async () => {
    try {
        account = await web3.eth.getAccounts()
        console.log("from: ",account[0])
        myCt = await new web3.eth.Contract(
            JSON.parse(interface)
        )
        let contractObj = await myCt.deploy({
            data: bytecode,
            arguments: ["first block"]
        }).send({
            from: account[0],
            gas: 1000000,
            gasPrice: 3000
        })
        console.log("ctaddr: ", contractObj.options.address)

        msg = await contractObj.methods.getMsg().call({
            from: account[0]
        })
        console.log("getmsg", msg)

        await contractObj.
        methods.setMsg("change value").
        send({
            from:account[0],
            gas: 1000000,
            gasPrice: 3000
        })
        msg = await contractObj.methods.getMsg().call({
            from: account[0]
        })
        console.log("getmsg", msg)
    } catch(err){
        console.log(err)
    }
}

deploy()
