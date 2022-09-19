const fcl = require("@onflow/fcl");
const t = require("@onflow/types");
const config = require("../config/config.json")
const transportGRPC = require("@onflow/transport-grpc").send;

const connect = () => {
    fcl.config()
        .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS_PREV_STROKE)
        .put("sdk.transport", transportGRPC)
    console.log("FCl connected .........");

}
connect();

const getTemplateId = async (nftId) => {
    const script = await fcl.send([
        fcl.script(
            `
            import AFLNFT from 0x8f9231920da9af6d
            pub fun main(nftId: UInt64): UInt64{
                let nftData = AFLNFT.getNFTData(nftId:nftId)
                return  nftData.templateId
            }`
        ),
        fcl.args([
            fcl.arg(String(nftId), t.UInt64)
        ])
    ]).then(fcl.decode)
    return script;


}

const userDepositData = async (sHeight, eHeight) => {
    const events = await fcl.send([
        fcl.getEventsAtBlockHeightRange(
            config.DEPOSIT_EVENT,
            sHeight,
            eHeight
        )
    ]).then(fcl.decode)

    for (let index = 0; index < events.length; index++) {
        let templateId = await getTemplateId(events[index]?.data.id)
        if (templateId === config.GENESISBALL_TEMPLATE_ID) {
            console.log("nftId :", events[index]?.data.id, "userAddress", events[index]?.data.to);
            console.log("templateId", templateId);
        }
    }

}

userDepositData(35444752, 35444952)