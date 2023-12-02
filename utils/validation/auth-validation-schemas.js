const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/;

const registrationValidationSchemas = Joi.object({
  userName: Joi.string().min(6).max(16),
  email: Joi.string().email().required(),
  password: Joi.string().required().pattern(passwordPattern).messages({
    "string.pattern.base":
      "Password should contain minimum eight characters, at least one letter and one number.",
  }),
});

module.exports = { registrationValidationSchemas };
