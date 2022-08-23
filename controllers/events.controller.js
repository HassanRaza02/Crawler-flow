const eventsHelper = require('../helpers/events.helper');

const getEvents = async (req, res, next) => {
    console.log("Getting Events");
    const events = await eventsHelper.getAllEvents();
    if(events)
    return events;
    else
    return null
  }

const updateEvents = async (req, res, next) => {
    console.log("Update Events Called");
    // await eventsHelper.updateEventRecords();
    
    res.status(200).json({message: "Successfully Updated Records"});
    
  }

const getCsv = async (req,res,next) => {
  const events = await getEvents(req,res,next);
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
  getEvents,
  updateEvents,
  getCsv
}
