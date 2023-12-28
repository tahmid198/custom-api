const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');
const Model = require('../models/model.js');
// const {firstCollection } = require('../index.js');


const express = require('express');
const router = express.Router();

// // all routes here are starting with /users
// router.get('/', getUsers);

// router.post('/', createUser);

// router.get('/:id', getUser);

// router.delete('/:id', deleteUser)

// router.patch('/:id', updateUser)




router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find({});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    console.log('test');
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;


