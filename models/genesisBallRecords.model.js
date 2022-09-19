
const mongoose = require("mongoose");

let genesisBallRecordsSchema = new mongoose.Schema({
    userAddress: {
        type: String,
        required: true,
    },
    nftId: {
        type: String,
        required: true,
    },
});

const genesisBallRecordsModel = mongoose.model("genesisBallRecordsModel", genesisBallRecordsSchema);

const queryevents = (queryObject) => {
    return genesisBallRecordsModel.findOne(queryObject).then(found => {
        return found;
    }).catch(err => {
        console.log("Error: ", err);
        return;
    });
};

const findMany = async (queryObject) => {
    return await genesisBallRecordsModel.find(queryObject).then(found => {
        return found;
    }).catch(err => {
        console.log("Error: ", err);
        return;
    });
};

const addRecord = async (data) => {
    try {
        await genesisBallRecordsModel.create(data);
        console.log("Genesis Balls Record Created Successfully");

    } catch (error) {
        console.log("Failed to insert Genesis Balls Record into DB, ", error)
    }
}

const removeAllRecords = async () => {
    await genesisBallRecordsModel.deleteMany();
    console.log("info: Old Genesis Ball Records removed.");
}

const getAllRecords = async () => {
    return await genesisBallRecordsModel.find({});
}

const getAllUiqueRecords = async () => {
    return await genesisBallRecordsModel.distinct("userAddress");
}

const getDistinctRecords = async () => {
    const users = await genesisBallRecordsModel.distinct("userAddress");
    console.log("Total Users ", users.length);
    return users;
}

const countGenesisBalls = async (address) => {
    const genesis = await genesisBallRecordsModel.find({ "userAddress": address });
    return genesis.length;
}



module.exports = {
    findMany,
    addRecord,
    removeAllRecords,
    getAllRecords,
    getAllUiqueRecords,
    getDistinctRecords,
    countGenesisBalls
};