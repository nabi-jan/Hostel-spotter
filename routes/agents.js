const express = require("express");
const { Agent, validate } = require('../models/agent');
const router = express.Router();
router.get('/:id', async (req, res) => {
    let agent = await Agent.find({ user_id: req.params.id });
    res.send(agent);
});
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await Agent.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Agent already registered");
    const agent = new Agent({
        name: req.body.name,
        phone_number: req.body.phone_number,
        email: req.body.email,
        user_id: req.body.user_id,
        hostel_id: req.body.hostel_id,
    });
    await agent.save();
    res.send(agent);
});
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const agent = await Agent.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            phone_number: req.body.phone_number,
            email: req.body.email,
            user_id: req.body.user_id,
            hostel_id: req.body.hostel_id,
        },

        {
            new: true
        }
    ).exec();

    if (!agent)
        return res.status(404).send("The agent with the given ID was not found.");

    res.send(agent);
});
router.delete('/:id', async (req, res) => {
    const agent = await Agent.findOneAndDelete({ _id: req.params.id }).exec();
    if (!agent)
        return res.status(404).send("The agent with the given ID was not found.");
    res.send(agent);
});
module.exports = router