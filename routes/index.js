var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events.controller');
const statsController = require('../controllers/stats.controller');
const templatesController = require('../controllers/templates.controller');




// router.get('/getAll', eventsController.getEvents );

router.get('/', eventsController.getAllEvents);
// Run Crawler | Update Events 
router.get('/update', eventsController.updateEvents );
//Get Data from DB and generate CSV
router.get('/getCsv', eventsController.getCsv);
//Get All the Stats and return
router.get('/getStats', statsController.getStats);

// router.get('/update', eventsController.updateEvents);


//NOTE: New Routes

//1 UpdateGenesisBallsRecord - Crawler
router.get('/GenesisRecords/update', templatesController.findGenesisBalls );


//2 Get All Users, Trx Ids and their Genesis Balls Count - Dashboard

router.get('/GenesisRecords/get', templatesController.getAllGenesisRecords );


//3 Generate CSV of Users and Genesis Balls Count
router.get('/GenesisRecords/generateCsv', templatesController.generateGenesisRecordCsv );






module.exports = router;


