const templatesHelper = require('../helpers/templates.helper');
const Users = require('../models/User.model');
const GenesisBallsRecModel = require('../models/genesisBallRecords.model');

module.exports.findGenesisBalls = async (req, res, next) => {

    result = await templatesHelper.updateGenesisBallsRecords();

    if (result.error) res.status(400).json({ success: false, error })
    else
        res.status(200).json({ message: "Successfully Updated Records" });

}
const getAllGenesisEvents = async () => {
    console.log("Getting Events ...");
    const events = await templatesHelper.getAllGenesisBalls();
    console.log("Fetchin events length: ", events.length);
    if (events)
        return events;
    else
        return null
}

module.exports.getAllGenesisRecords = async (req, res, next) => {
    const events = await getAllGenesisEvents();
    events.length ? res.status(200).json({ events }) : res.status(200).json({ message: "No Events found in DB" });
}

module.exports.generateGenesisRecordCsv = async (req, res, next) => {
    const userRecords = await Users.getAll();

    let dataForCsv = []

    for (let i = 0; i < userRecords.length; i++) {
        const user = userRecords[i];
        const genesisRecords = await GenesisBallsRecModel.findMany({ "userAddress": user.address });
        let nftIds = [];
        genesisRecords.map((rec) => {
            nftIds.push(rec.nftId);
        })
        dataForCsv.push({
            userAddress: user.address,
            genesisCount: user.genesisCount,
            nftId: nftIds.toString()

        })

    }




    console.log("Data: ", dataForCsv);
    templatesHelper.generateCsv(dataForCsv);
    res.status(200).json({ success: true, message: "Successfuly generated CSV" })

}

module.exports.getUniqueUsers = async (req, res, next) => {
    await templatesHelper.getAllUniqueRecord();
    res.status(200).json({ success: true });
}