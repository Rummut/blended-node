const express = require("express");
const validateBody = require("../utils/validation/validateBody");
const {
  registrationValidationSchemas,
  loginValidationSchema,
} = require("../utils/validation/auth-validation-schemas");
const router = express.Router();
const { registration, login } = require("../controllers/authController");

router.post(
  "/registration",
  validateBody(registrationValidationSchemas),
  registration
);

router.post("/login", validateBody(loginValidationSchema), login);

router.post("/logout");

module.exports = { authRouter: router };
