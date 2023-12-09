const userRoutes = require('./routes/users.js');
const express = require('express');

const app = express();
const PORT = 8080;

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