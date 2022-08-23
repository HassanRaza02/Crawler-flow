const config = require('../config/config.json');
const fcl = require("@onflow/fcl")

    fcl.config()
    .put("accessNode.api", "https://rest-mainnet.onflow.org");

module.exports.getAllEvents = async() => {
    let receiptAddressess = [];
    let undefinedEvents =0;

    
    console.log("Start Height ", config.BLOCK_HEIGHTS.START_HEIGHT);
    console.log("END Height ", config.BLOCK_HEIGHTS.END_HEIGHT);
    console.log("SEARCH LENGTH ", config.BLOCK_HEIGHTS.SEARCH_LENGTH);


        const events = await fcl
        .send([
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLPack.PackBought",
                config.BLOCK_HEIGHTS.START_HEIGHT,
                config.BLOCK_HEIGHTS.START_HEIGHT + config.BLOCK_HEIGHTS.SEARCH_LENGTH,
            ),
        ])
        .then(fcl.decode);
        console.log("Events: ", events);

        if (events[0]?.data?.receiptAddress ) {
            receiptAddressess.push(events[0]?.data?.receiptAddress)
        } else {
            undefinedEvents++;
        }

        console.log("ADDRESSES: ", receiptAddressess)
}