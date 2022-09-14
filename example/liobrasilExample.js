const fcl = require("@onflow/fcl");
const transportGRPC = require("@onflow/transport-grpc").send;

fcl.config({
    "sdk.transport": transportGRPC,
    "accessNode.api": "http://access-001.mainnet18.nodes.onflow.org:8000",
});

const doStuff = async () => {
    var events = await fcl
        .send([
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLPack.PackBought",
                35534251,
                35534255
            ),
        ])
        .then(fcl.decode);
    console.log(events);
};
doStuff();