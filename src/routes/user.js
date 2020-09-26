const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user')

router.get('/all', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser) // post method and send body in x-www-unlencoded
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router;