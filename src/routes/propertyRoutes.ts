import express from "express";
import bodyParser from "body-parser";

export const router = express.Router();

router.use(bodyParser.json());

router.get('/', async (req, res) => {
    res.send('GET all properties');
});

router.get('/:id', async (req, res) => {
    res.send('GET property by id');
});

router.post('/', async (req, res) => {
    res.send('Create property');
});

router.put('/', async (req, res) => {
    res.send('Update property');
});

router.delete('/', async (req, res) => {
    res.send('Delete property');
});
