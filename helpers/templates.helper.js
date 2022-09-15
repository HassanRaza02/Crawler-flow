const config = require('../config/config.json');
const fcl = require("@onflow/fcl");
const transportGRPC = require("@onflow/transport-grpc").send;
const genesisBallRecordsModel = require('../models/genesisBallRecords.model');
// const converter = require('json-2-csv');
// const fs = require('fs');
// const path = require('path');

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

const getRecipientAddress = async(txId) => {
    try {
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
    return address; 
    } catch (error) {
        console.log("ERROR: Failed to get Trx Details, Details: ", error);
    }
}


module.exports.updateGenesisBallsRecords = async () => {

    let totalChecked = 0;

    let start = config.BLOCK_HEIGHTS.START_HEIGHT;
    let end = config.BLOCK_HEIGHTS.START_HEIGHT + 200;


    try {
        await genesisBallRecordsModel.removeAllRecords() //Deleting Old records

        await connect(config.ACCESS_NODE_API_ADDRESS_PREV_STROKE);

        while (end <= config.BLOCK_HEIGHTS.END_HEIGHT) {
            console.log("OLD SPORK | ITERATION---->>>>>>  Start:", start, " End: ", end);

            const events = await fcl
                .send([
                    fcl.getEventsAtBlockHeightRange(

                        "A.8f9231920da9af6d.AFLNFT.NFTMinted",
                        start,
                        end,
                    ),
                ])
                .then(fcl.decode);

                console.log("Total Events", events?.length);


                for (let index = 0; index < events.length; index++) {
                    if (events[index]?.data?.templateId === config.GENESISBALL_TEMPLATE_ID) {
                        console.log("templateId: ", events[index]?.data.templateId, "transactionId", events[index]?.transactionId);
                        let address = await getRecipientAddress(events[index]?.transactionId);
                        console.log("Address: ", address);

                        await genesisBallRecordsModel.addRecord({
                            userAddress: address,
                            trxId: events[index].transactionId,
                        });
                    }
                    
                }

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

            for (let index = 0; index < events.length; index++) {
                if (events[index]?.data?.templateId === config.GENESISBALL_TEMPLATE_ID) {
                    console.log("templateId: ", events[index]?.data.templateId, "transactionId", events[index]?.transactionId);
                    let address = await getRecipientAddress(events[index]?.transactionId);
                    console.log("Address: ", address);

                    await genesisBallRecordsModel.addRecord({
                        userAddress: address,
                        trxId: events[index].transactionId,
                    });
                }
                
            }

            //NOTE: Move to the next
            start = end + 1;
            if (end === config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE) break;
            end = end + 200;
            if (end > config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE) end = config.BLOCK_HEIGHTS.END_HEIGHT_CURRENT_STROKE;

            totalChecked++;
        }//end While
        console.log("Total Checked: ", totalChecked);
    } catch (error) {
        console.log("Something went wrong | ERROR:", error);
    }
}

