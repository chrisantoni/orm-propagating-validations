var express = require('express');
var router = express.Router();

var eoController = require('../controller/eo_controller')
/* GET home page. */
router.get('/user',eoController.get_all_event)
router.post('/user',eoController.create_event)

module.exports = router;
