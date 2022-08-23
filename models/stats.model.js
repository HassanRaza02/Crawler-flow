
const mongoose = require("mongoose");

/*
startHeight , 
EndHeight ,
Total Events Crawled,
UndefinedEvents,
commonSupplies,


*/


let statsSchema = new mongoose.Schema({
    startHeight: {
        type: String,
        required: true,
    },
    endHeight: {
        type: String,
        required: true,
    },
    totalEventsCrawled: {
        type: Number,
        required: true,
    },
    undefinedEvents: {
        type: Number,
        required: true,
    },
    commonSupplies: {
        type: Number,
        required: false,
    },    
    ovationSupplies: {
        type: Number,
        required: false,
    },
    deluxSupplies: {
        type: Number,
        required: false,
    },
    genesisBall: {
        type: Number,
        required: false,
    },
  });

const statsModel = mongoose.model("statsModel", statsSchema);

const unloadStats = async () => {
    await statsModel.deleteMany();
    console.log("info: Old Stats Unloaded ...");
}


const getStats = async () => {
    return await statsModel.find();
}

const updateStats = (newStats) => {
try {
    unloadStats();
    statsModel.create(newStats);
    console.log("info: Stats Added Successfully");
  
} catch (error) {
  console.log("error: Failed to insert data into DB, ", error)
}
}


module.exports = {
    getStats,
    updateStats
};