var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events.controller');
const statsController = require('../controllers/stats.controller');



/* Update Events */
// router.get('/update', eventsController.updateEvents );
// router.get('/getAll', eventsController.getEvents );

router.get('/', eventsController.getEvents);
router.get('/getCsv', eventsController.getCsv);
router.get('/getStats', statsController.getStats);

// router.get('/update', eventsController.updateEvents);



module.exports = router;


