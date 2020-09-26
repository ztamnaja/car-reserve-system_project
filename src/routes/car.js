const express = require('express')
const router = express.Router();
const carController = require('../controllers/car')


router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar) // post method and send body in x-www-unlencoded
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)


module.exports = router;