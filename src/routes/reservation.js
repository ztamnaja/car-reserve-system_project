const express = require('express')
const router = express.Router();
const reservationController = require('../controllers/reservation')


router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReserveById);
router.post('/', reservationController.createReserve) // post method and send body in x-www-unlencoded
router.put('/:id', reservationController.updateReserve)
router.delete('/:id', reservationController.deleteReserve)

module.exports = router;