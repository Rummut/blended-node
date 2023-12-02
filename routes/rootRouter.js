const express = require("express");

const { authRouter } = require("./auth");
const { tasksRouter } = require("./tasks");

const router = express.Router();

router.use("/tasks", tasksRouter);

router.use("/auth", authRouter);

module.exports = { router };
