const config = require('../config/config.json');
const fcl = require("@onflow/fcl");
const type = require("@onflow/types")
const transportGRPC = require("@onflow/transport-grpc").send;
const genesisBallRecordsModel = require('../models/genesisBallRecords.model');
const userModel = require('../models/User.model');

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


const getTemplateId = async (nftId) => {
    try {
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
                fcl.arg(String(nftId), type.UInt64)
            ])
        ]).then(fcl.decode)
        return script;

    } catch (error) {
        console.log("ERROR getting template ID | ", error);
        return null;
    }
}


module.exports.updateGenesisBallsRecords = async () => {

    let totalChecked = 0;

    let start = config.BLOCK_HEIGHTS.START_HEIGHT;
    let end = config.BLOCK_HEIGHTS.START_HEIGHT + 200;


    try {
        // await genesisBallRecordsModel.removeAllRecords() //Deleting Old records

        // await connect(config.ACCESS_NODE_API_ADDRESS_PREV_STROKE);

        // while (end <= config.BLOCK_HEIGHTS.END_HEIGHT) {
        //     console.log("OLD SPORK | ITERATION---->>>>>>  Start:", start, " End: ", end);

        //     const events = await fcl
        //         .send([
        //             fcl.getEventsAtBlockHeightRange(

        //                 config.DEPOSIT_EVENT,
        //                 start,
        //                 end,
        //             ),
        //         ])
        //         .then(fcl.decode);

        //     console.log("Total Events", events?.length);


        //     for (let index = 0; index < events.length; index++) {

        //         const nftId = events[index]?.data?.id;
        //         const templateId = await getTemplateId(nftId);
        //         const address = events[index]?.data.to;

        //         if (templateId === config.GENESISBALL_TEMPLATE_ID) {
        //             console.log("nftId: ", nftId, " user:", address);

        //             await genesisBallRecordsModel.addRecord({
        //                 userAddress: address,
        //                 nftId,
        //             });
        //         }

        //     }

        //     //NOTE: Move to the next
        //     start = end + 1;
        //     if (end === config.BLOCK_HEIGHTS.END_HEIGHT) break;
        //     end = end + 200;
        //     if (end > config.BLOCK_HEIGHTS.END_HEIGHT) end = config.BLOCK_HEIGHTS.END_HEIGHT;

        //     totalChecked++;
        // }//end While
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
                        config.DEPOSIT_EVENT,
                        start,
                        end,
                    ),
                ])
                .then(fcl.decode);
            console.log("Total Events", events?.length);

            for (let index = 0; index < events.length; index++) {

                const nftId = events[index]?.data?.id;
                const templateId = await getTemplateId(nftId);
                const address = events[index]?.data.to;

                if (templateId === config.GENESISBALL_TEMPLATE_ID) {
                    console.log("nftId: ", nftId, " user:", address);

                    await genesisBallRecordsModel.addRecord({
                        userAddress: address,
                        nftId,
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

module.exports.getAllGenesisBalls = async () => {
    return events = await genesisBallRecordsModel.getAllRecords()
}

module.exports.generateCsv = (data) => {
    try {
        const fileName = "Genesis Balls Record -" + Date.now();
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

module.exports.getAllUniqueRecord = async () => {
    const users = await genesisBallRecordsModel.getDistinctRecords();
    users.map(async (user) => {
        console.log("User ", user);
        const genesisCount = await genesisBallRecordsModel.countGenesisBalls(user);
        await userModel.add({
            address: user,
            genesisCount
        });
    });


}