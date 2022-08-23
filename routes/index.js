var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events.controller');
const app = express()


/* Update Events */
// router.get('/update', eventsController.updateEvents );
// router.get('/getAll', eventsController.getEvents );

router.get('/', eventsController.getEvents);
router.get('/getCsv', eventsController.getCsv);
// router.get('/update', eventsController.updateEvents);



module.exports = router;


