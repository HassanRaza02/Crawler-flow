
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

const queryevents = (queryObject) => {
  return eventsModel.findOne(queryObject).then(found => {
    return found;
  }).catch(err => {
    return;
  });
};

const updateRecord = async (existingUserRecord, newTemplateId) => {
  console.log("New Temp Id:", newTemplateId);
  let updatedTemplateIds = existingUserRecord.templateIds;
  updatedTemplateIds.push(newTemplateId);
  const updated = await eventsModel.findOneAndUpdate({ _id: existingUserRecord._id }, { templateIds: updatedTemplateIds }, { new: true });
  if (updated) console.log("Existing record updated");
}

const addEventDetails = async (data) => {
  try {

    //Check if user already exists
    const existingUserRecord = await queryevents({ userAddress: data.userAddress })
    if (existingUserRecord) {
      console.log("Existing Record Found: "); //Update
      await updateRecord(existingUserRecord, data.templateIds);

    }
    else {
      await eventsModel.create(data);
      console.log("Record Created Successfully");
    }
  } catch (error) {
    console.log("Failed to insert data into DB, ", error)
  }
}

const removeAllRecords = async () => {
  await eventsModel.deleteMany();
  console.log("info: Old Events Records removed.");

}

const getAllEvents = async () => {
  return await eventsModel.find({});
}



module.exports = {
  queryevents,
  addEventDetails,
  removeAllRecords,
  getAllEvents
};