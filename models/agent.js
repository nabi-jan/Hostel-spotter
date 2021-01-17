const Joi = require('joi');
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    hostel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel"
    }

});
const Agent = mongoose.model('Agent', categorySchema);
function validateAgent(agent) {
    const schema = Joi.object({
        name: Joi.string()
            .required(),
        phone_number: Joi.string()
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        user_id: Joi.string()
            .required(),
        hostel_id: Joi.string()
            .required()

    });

    return schema.validate(agent);
}
exports.Agent = Agent;
exports.validate = validateAgent;