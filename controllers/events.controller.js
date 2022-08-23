const eventsHelper = require('../helpers/events.helper');

module.exports.getEvents = async (req, res, next) => {
    console.log("Update Events Called");
    const events = await eventsHelper.getAllEvents();
    if(events)
    res.status(200).json({status: "active"});
    else
    res.status(200).json({error: "No Events Record exist"});
  }

module.exports.updateEvents = async (req, res, next) => {
    console.log("Update Events Called");
    await eventsHelper.updateEventRecords();
    
    res.status(200).json({message: "Successfully Updated Records"});
    
  }

