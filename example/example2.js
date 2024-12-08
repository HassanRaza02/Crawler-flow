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


const getTransaction = async (txId) => {
    const tx = await fcl
        .send([
            fcl.getTransaction(
                txId
            ),
        ])
        .then(fcl.decode);
    let address;
    tx?.args.map((arg) => {
        if (arg.type === "Address") {
            address = tx?.args[0].value;
            return;
        }
    })
    // console.log("Address: ", address);
    return address;

}
const userData = async (sHeight, eHeight) => {
    var events = await fcl.send(
        [
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLNFT.NFTMinted",
                sHeight,
                eHeight
            )
        ]).then(fcl.decode)
    for (let index = 0; index < events.length; index++) {

        if (events[index]?.data?.templateId === '129') {
            console.log("templateId: ", events[index]?.data.templateId, "transactionId", events[index]?.transactionId);
            let address = await getTransaction(events[index]?.transactionId)
            console.log("Address: ", address);
        }
    }

    // events.map(async (ev) => {
    //     if (ev?.data?.templateId === '129') {
    //         console.log("templateId: ", ev?.data.templateId, "transactionId", ev?.transactionId);
    //         let address = await getTransaction(ev?.transactionId)
    //         console.log("Address: ", address);
    //     }

    // })
}

userData(35444752, 35444952)
// getTransaction("655d3726abd459a8bc0032f6e51e69c1bc135751eaa0e89c08b91bae9ce9ff7d")