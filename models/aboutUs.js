const Joi = require('joi');
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const About = mongoose.model('AboutUS', categorySchema);
function validateAboutUS(about) {
    const schema = Joi.object({
        title: Joi.string()
            .required(),
        description: Joi.string()
            .required()
    });

    return schema.validate(about);
}
exports.About = About;
exports.validate = validateAboutUS;