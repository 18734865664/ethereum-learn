const fs = require("fs")
const solc = require("solc")
const path = require("path")

let contractPath = path.resolve(__dirname, "contract", "demo1.sol")


function getContract(Path) {
    let data = fs.readFileSync(Path, "utf8")
    let compileData = solc.compile(data, 1)
    return compileData.contracts[':demo1']
}

module.exports = getContract(contractPath)
