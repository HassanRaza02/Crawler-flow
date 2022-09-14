const fcl = require("@onflow/fcl")
const t = require("@onflow/types")
const config = require("../config/config.json")
const { HEADLINE_DATA_ARRAY } = require("../helpers/headlineMetadataArray.helper")
const connect = () => {

    fcl.config()
        .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS);
    console.log("Connected to FCL ACCESS NODE : ", config.ACCESS_NODE_API_ADDRESS)
}
connect();

const dataHeadline = async (addr) => {
    const data = await fcl.send([
        fcl.script(HEADLINE_DATA_ARRAY),
        fcl.args([
            fcl.arg(addr, t.Address)
        ])
    ]).then(fcl.decode);
    console.log(data);

}
dataHeadline("0xb0d2b21b609c4f14")