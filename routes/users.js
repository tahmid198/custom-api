const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');

const express = require('express');
const router = express.Router();

// all routes here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router;