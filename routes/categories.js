const express = require("express");
const router = express.Router();
const { Category, validate } = require('../models/category');
router.get('/:id', async (req, res) => {
    let categories = await Category.find({ user_id: req.params.id });
    res.send(categories);
});
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const category = new Category({
        name: req.body.name,
        user_id: req.body.user_id,
    });
    await category.save();
    res.send(category);
});
router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const category = await Category.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            user_id: req.body.user_id,
        },

        {
            new: true
        }
    ).exec();

    if (!category)
        return res.status(404).send("The category with the given ID was not found.");

    res.send(category);
});
router.delete("/:id", async (req, res) => {
    const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();

    if (!category)
        return res.status(404).send("The category with the given ID was not found.");

    res.send(category);
});
module.exports = router;