const express = require("express");
const validateBody = require("../utils/validation/validateBody");
const {
  registrationValidationSchemas,
} = require("../utils/validation/auth-validation-schemas");
const router = express.Router();
const { registration } = require("../controllers/authController");

router.post(
  "/registration",
  validateBody(registrationValidationSchemas),
  registration
);

router.post("/login");

router.post("/logout");

module.exports = { authRouter: router };
