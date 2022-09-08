var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events.controller');
const statsController = require('../controllers/stats.controller');




// router.get('/getAll', eventsController.getEvents );

router.get('/', eventsController.getAllEvents);
// Run Crawler | Update Events 
router.get('/update', eventsController.updateEvents );
//Get Data from DB and generate CSV
router.get('/getCsv', eventsController.getCsv);
//Get All the Stats and return
router.get('/getStats', statsController.getStats);

// router.get('/update', eventsController.updateEvents);



module.exports = router;


