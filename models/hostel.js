const Joi = require("joi");
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  facilities: [String],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Hostel = mongoose.model("Hostel", categorySchema);
function validateHostel(hostel) {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    area: Joi.string().required(),
    category: Joi.optional(),
    image: Joi.string().optional(),
    facilities: Joi.optional(),
    user_id: Joi.string().required(),
  });

  return schema.validate(hostel);
}
exports.Hostel = Hostel;
exports.validate = validateHostel;
