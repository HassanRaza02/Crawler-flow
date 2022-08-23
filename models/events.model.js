
const mongoose = require("mongoose");

  let eventsSchema = new mongoose.Schema({
    userAddress: {
      type: String,
      required: true,
    },
    templateIds: {
        type: [String],
        required: true,
      },
    });

const eventsModel = mongoose.model("eventsModel", eventsSchema);

const addEventDetails = () => {
  try {
    const dummy = {
      userAddress: "1",
      templateIds: "1",
    }
    eventsModel.create(dummy);
    console.log("Data Added Successfully");
    
  } catch (error) {
    console.log("Failed to insert data into DB, ", error)
  }
}


module.exports = {
  addEventDetails
};