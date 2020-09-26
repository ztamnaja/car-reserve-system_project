const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/service')


router.get('/', servicesController.getAllServices);
router.get('/:id', servicesController.getServiceById);
router.post('/', servicesController.createService) // post method and send body in x-www-unlencoded
router.put('/:id', servicesController.updateService)
router.delete('/:id', servicesController.deleteService)



module.exports = router;