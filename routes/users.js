const { v4: uuidv4 } = require('uuid');
const express = require('express');

const router = express.Router();

const users = [
    {
        "first_name":"Tony",
        "last_name":"Stark",
        "alias":"Iron Man"
    }
]

// all routes here are starting with /users
router.get('/', (req, res) => {

    res.status(200).send(users);

});

router.post('/', (req, res) => {
    
    const user = req.body;
    users.push({... user, id: uuidv4()});
    res.send(`User with the username ${user.first_name} added to the database!`);

});

router.get('/:id', (req, res) =>{

    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);

});

module.exports = router;