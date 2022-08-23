var express = require('express');
var router = express.Router();
const eventsController = require('../controllers/events.controller');

/* Update Events */
router.get('/update', eventsController.updateEvents );


module.exports = router;
