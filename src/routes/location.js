const express = require('express')
const router = express.Router();
const locationController = require('../controllers/location')


router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getAllLocations);
router.post('/', locationController.createLocation) // post method and send body in x-www-unlencoded
router.put('/:id', locationController.updateLocation)
router.delete('/:id', locationController.deleteLocation)

module.exports = router;