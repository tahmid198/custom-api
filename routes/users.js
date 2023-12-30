const { getDocuments, createDocument, getDocument, deleteDocument, updateDocument } = require('../controllers/users.js');


const express = require('express');
const router = express.Router();

// all routes here are starting with /api
router.get('/getAll', getDocuments);

router.post('/post', createDocument);

router.get('/getOne/:id', getDocument);

router.delete('/delete/:id', deleteDocument)

router.patch('/update/:id', updateDocument)


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


