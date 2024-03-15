const express = require('express');
const router = express.Router();
const DriverController = require('../controller/diverController')


router.get('/driver',DriverController.getAllDriverInformation);
router.get('/driver/id',DriverController.getAllDriverInformationById);
router.post('/driver', DriverController.CreateDriver);
router.patch('/driver/id', DriverController.updatedDriverInformation);
router.delete('/driver/id', DriverController.deletedDriverInformation);


module.exports = router;