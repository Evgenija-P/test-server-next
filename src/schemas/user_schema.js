const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

const schemas = {
  registerSchema,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
