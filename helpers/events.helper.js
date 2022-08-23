const config = require('../config/config.json');
const fcl = require("@onflow/fcl");
const eventsModel = require('../models/events.model');

const connect = () =>{

    fcl.config()
    .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS);
    console.log("Connected to FCL ACCESS NODE : ", config.ACCESS_NODE_API_ADDRESS)
}
connect();



module.exports.updateEventRecords = async() => {
    let receiptAddressess = [];
    let undefinedEvents =0;
    let totalChecked = 0;

    let start = config.BLOCK_HEIGHTS.START_HEIGHT;
    let end = config.BLOCK_HEIGHTS.START_HEIGHT + 200;


    try {
    await eventsModel.removeAllRecords() //Deleting Old records
    while(end <= config.BLOCK_HEIGHTS.END_HEIGHT )
    {
        console.log("ITERATION---->>>>>>  Start:", start, " End: ", end);
 
         
        const events = await fcl
        .send([
            fcl.getEventsAtBlockHeightRange(
                "A.8f9231920da9af6d.AFLPack.PackBought",
                start,
                end,
            ),
        ])
        .then(fcl.decode);
        console.log("Total Events",events?.length);

        events.map (async (ev) => {
            console.log(">> EVENT: ", ev)
            receiptAddressess.push(ev?.data?.receiptAddress);
            eventsModel.addEventDetails({
                userAddress:    ev?.data?.receiptAddress,
                templateIds:    ev?.data?.templateId,
            });
        })

        //NOTE: Move to the next
        start   = end +1;
        // if(start> config.BLOCK_HEIGHTS.END_HEIGHT) end=config.BLOCK_HEIGHTS.END_HEIGHT;
        if(end === config.BLOCK_HEIGHTS.END_HEIGHT) break;
        end = end + 200;
        if(end> config.BLOCK_HEIGHTS.END_HEIGHT) end=config.BLOCK_HEIGHTS.END_HEIGHT;

        totalChecked++;
    }//end While
    } catch (error) {
        console.log("Something went wrong | Retrying Again | ERROR:", error);
    }
        console.log("ADDRESSES: ", receiptAddressess);
        console.log("Last Checked: ", end);
        console.log("Total Checked Events: ", totalChecked);
        console.log("Undefined Events: ", undefinedEvents);
}

module.exports.getAllEvents = async () => {
    return events = await eventsModel.getAllEvents();
}