const Joi = require('joi');
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});
const Category = mongoose.model('Category', categorySchema);
function validateCategory(user) {
    const schema = Joi.object({
        name: Joi.string()
            .required(),
        user_id: Joi.string()
            .required()

    });

    return schema.validate(user);
}
exports.Category = Category;
exports.validate = validateCategory;