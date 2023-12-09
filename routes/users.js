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

    users.push(user);

    res.send(`User with the username ${user.first_name} added to the database!`);

});

module.exports = router;