const config = require('../config/config.json');
const fcl = require("@onflow/fcl");
const transportGRPC = require("@onflow/transport-grpc").send;
const eventsModel = require('../models/events.model');
const converter = require('json-2-csv');
const fs = require('fs');
const path = require('path');




const connect = async (ACCESS_NODE) => {

    if (ACCESS_NODE === config.ACCESS_NODE_API_ADDRESS_PREV_STROKE) {
        console.log("Connecting with Prev Spork")
        await fcl.config({
            "sdk.transport": transportGRPC,
            "accessNode.api": ACCESS_NODE,
        });
    }

    else {
        console.log("Connecting to Current Spork");

        fcl.config()
            .delete("sdk.transport");
        fcl.config()
            .delete("accessNode.api");

        fcl.config()
            .put("accessNode.api", ACCESS_NODE);

    }


    console.log("CONNECTED to FCL ACCESS NODE : ", ACCESS_NODE)
}


module.exports.updateEventRecords = async () => {
    let receiptAddressess = [];
    let undefinedEvents = 0;
    let totalChecked = 0;

    let start = config.BLOCK_HEIGHTS.START_HEIGHT;
    let end = config.BLOCK_HEIGHTS.START_HEIGHT + 200;


    try {
        // await eventsModel.removeAllRecords() //Deleting Old records

        await connect(config.ACCESS_NODE_API_ADDRESS_PREV_STROKE);

        while (end <= config.BLOCK_HEIGHTS.END_HEIGHT) {
            console.log("OLD SPORK | ITERATION---->>>>>>  Start:", start, " End: ", end);

            const events = await fcl
                .send([
                    fcl.getEventsAtBlockHeightRange(

                        "A.8f9231920da9af6d.AFLPack.PackBought",
                        start,
                        end,
                    ),
                ])
                .then(fcl.decode);
            console.log("Total Events", events?.length);

            events.map(async (ev) => {
                console.log(">> EVENT: ", ev)
                receiptAddressess.push(ev?.data?.receiptAddress);
                await eventsModel.addEventDetails({
                    userAddress: ev?.data?.receiptAddress,
                    templateIds: ev?.data?.templateId,
                });
            })

            //NOTE: Move to the next
            start = end + 1;
            if (end === config.BLOCK_HEIGHTS.END_HEIGHT) break;
            end = end + 200;
            if (end > config.BLOCK_HEIGHTS.END_HEIGHT) end = config.BLOCK_HEIGHTS.END_HEIGHT;

            totalChecked++;
        }//end While
        //Switching connection to Current Spork
        start = config.BLOCK_HEIGHTS.START_HEIGHT_CURRENT_STROKE;
        end = start + 200;

        //Connecting Current Access Node
        await connect(config.ACCESS_NODE_API_ADDRESS_CURRENT);

        while (end <= config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE) {
            console.log("CURRENT SPORK | ITERATION---->>>>>>  Start:", start, " End: ", end);


            const events = await fcl
                .send([
                    fcl.getEventsAtBlockHeightRange(
                        "A.8f9231920da9af6d.AFLPack.PackBought",
                        start,
                        end,
                    ),
                ])
                .then(fcl.decode);
            console.log("Total Events", events?.length);

            events.map(async (ev) => {
                console.log(">> EVENT: ", ev)
                receiptAddressess.push(ev?.data?.receiptAddress);
                await eventsModel.addEventDetails({
                    userAddress: ev?.data?.receiptAddress,
                    templateIds: ev?.data?.templateId,
                });
            })

            //NOTE: Move to the next
            start = end + 1;
            if (end === config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE) break;
            end = end + 200;
            if (end > config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE) end = config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE;

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

module.exports.generateCsv = (data) => {

    try {

        const fileName = "Events Record -" + Date.now();
        const filePath = path.join('public', "/", fileName) + ".csv";

        converter.json2csv(data, (err, csv) => {
            if (err) {
                throw err;
            }
            fs.writeFileSync(filePath, csv);
        });



    } catch (error) {
        console.log("Failed to generate CSV | ERROR: ", error)
    }


}