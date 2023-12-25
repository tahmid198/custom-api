const userRoutes = require('./routes/users.js');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;
const dbName = process.env.MONGODB_DB_NAME;
const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_USER_PASS;

mongoose.connect(
    process.env.MONGODB_URI,
    {
        dbName: dbName,
        user: dbUser,
        pass: dbPassword
    }
)
//     .then(() => {
//     console.log('Mongodb connected...')
// })

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

const database = mongoose.connection;

database.on('error', (error) => console.error(error));
database.once('connected', () => console.log('Database Connected'));

// Using a single event listener for 'connected' and 'open'
database.once('open', () => console.log('Mongodb connected...'));

/**
 * Express does not parse JSON in the body by default
 * We will need to use middleware that calls express to parse JSON before the actual data hits function to handle the
 */

app.use(express.json())

app.use('/users', userRoutes);

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large',
        company: 'Hollister'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});