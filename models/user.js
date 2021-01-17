const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  role: String,
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      role: this.role,
    },
    "mykey",
    {
      expiresIn: "1d",
    }
  );
  return token;
};
const User = mongoose.model("User", userSchema);
function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
    role: Joi.string().optional(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
