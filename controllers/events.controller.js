const eventsHelper = require('../helpers/events.helper');

const getEvents = async () => {
    console.log("Getting Events ...");
    const events = await eventsHelper.getAllEvents();
    console.log("Fetched Events Length:: ", events.length);
    if(events)
      return events;
    else
      return null
  }

const getAllEvents =async  (req,res,next) => {

  const events = await getEvents();
  events.length ? res.status(200).json({events}) : res.status(200).json({message: "No Events Found in DB"})
}

const updateEvents = async (req, res, next) => {
    await eventsHelper.updateEventRecords();
    
    res.status(200).json({message: "Successfully Updated Records"});
    
  }

const getCsv = async (req,res,next) => {
  const events = await getEvents();
  console.log("Events",events);
  let dataForCsv = []
  events.map((ev)=>{
    dataForCsv.push({
      userAddress : ev.userAddress,
      totalTemplates: ev.templateIds,
      templateIds: ev.templateIds.length,
    })
  });
  
  
  eventsHelper.generateCsv(dataForCsv);
  res.status(200).json({success: true, message:"Successfully generated CSV"});
}

module.exports = {
  getAllEvents,
  updateEvents,
  getCsv
}
