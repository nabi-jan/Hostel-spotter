const express = require("express");
const { About, validate } = require('../models/aboutUs');
const router = express.Router();
router.get('/', async (req, res) => {
    let about = await About.find();
    res.send(about);
});
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const about = new About({
        title: req.body.title,
        description: req.body.description
    });
    await about.save();
    res.send(about);
});
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const about = await About.findOneAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
            description: req.body.description
        },

        {
            new: true
        }
    ).exec();

    if (!about)
        return res.status(404).send("The about with the given ID was not found.");

    res.send(about);
});
router.delete('/:id', async (req, res) => {
    const about = await About.findOneAndDelete({ _id: req.params.id }).exec();
    if (!about)
        return res.status(404).send("The about with the given ID was not found.");
    res.send(about);
});
module.exports = router