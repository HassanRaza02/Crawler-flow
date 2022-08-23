const config = require('../config/config.json');
const fcl = require("@onflow/fcl");
const eventsModel = require('../models/events.model');

const connect = () =>{

    fcl.config()
    .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS);
    console.log("Connected to FCL ACCESS NODE : ", config.ACCESS_NODE_API_ADDRESS)
}
connect();



module.exports.getAllEvents = async() => {
    let receiptAddressess = [];
    let undefinedEvents =0;

    let start = config.BLOCK_HEIGHTS.START_HEIGHT;
    let end = config.BLOCK_HEIGHTS.START_HEIGHT + 1;

    while(end!==config.BLOCK_HEIGHTS.END_HEIGHT)
    try {
         
        const events = await fcl
        .send([
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLPack.PackBought",
                start,
                end,
            ),
        ])
        .then(fcl.decode);
        console.log("Events: ", events);

        if (events[0]?.data?.receiptAddress ) {
            receiptAddressess.push(events[0]?.data?.receiptAddress);
            eventsModel.addEventDetails();
        } else {
            undefinedEvents++;
        }

        //NOTE: Move to the next
        start++;
        end ++;
    } catch (error) {
        console.log("Something went wrong | Retrying Again");
    }
        console.log("ADDRESSES: ", receiptAddressess);
        console.log("Undefined Events: ", undefinedEvents);
}