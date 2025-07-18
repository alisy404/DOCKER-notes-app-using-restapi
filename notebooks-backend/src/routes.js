const express = require('express');
const mongoose = require('mongoose');
const { Notebook } = require('./model');

const notebooksRouter = express.Router();

const ValidateId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Notebook not found' });
    }

    next();
};


// Create a new notebook: POST '/' request through postman
// Retrieve all notebooks: GET '/' request through postman
// Retrieve a single noteboo:   GET '/:id' - localhost:8081/api/notebooks/some-id
// Update a single noteboo: PUT '/:id' - localhost:8081/api/notebooks/some-id
// Delete a single noteboo: DELETE '/:id' - localhost:8081/api/notebooks/some-id


notebooksRouter.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ error: "'name' field is required" });
        }

        const notebook = new Notebook({ name, description });
        await notebook.save();
        res.status(201).json({ data: notebook })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
notebooksRouter.get('/', async (req, res) => {
    try {
        const notebooks = await Notebook.find();
        return res.status(200).json({ data: notebooks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
notebooksRouter.get('/:id', ValidateId, async (req, res) => {
    try {
        const notebooks = await Notebook.findById(req.params.id);

        if (!notebooks) {
            return res.status(404).json({ error: 'Notebook not found' });
        }
        return res.status(200).json({ data: notebooks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
notebooksRouter.put('/:id', ValidateId, async (req, res) => {
    try {
        const { name, description } = req.body;

        const notebook = await Notebook.findByIdAndUpdate(
            req.params.id,
            { name, description }, { new: true }
        );

        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found' });
        }

        return res.json({ data: notebook });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
notebooksRouter.delete('/:id', ValidateId, async (req, res) => {
    try {
        const notebook = await Notebook.findByIdAndDelete(req.params.id);

        if (!notebook) {
            return res.status(404).json({ error: 'Notebook not found' });
        }

        return res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = {
    notebooksRouter
};

