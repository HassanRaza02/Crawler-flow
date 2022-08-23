const eventsHelper = require('../helpers/events.helper');

module.exports.updateEvents = async (req, res, next) => {
    console.log("Update Events Called");
    await eventsHelper.getAllEvents();
    res.status(200).json({status: "active"});
  }

