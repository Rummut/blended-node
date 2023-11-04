const express = require("express");
const {
  getAllTasks,
  getOneTask,
  createTask,
} = require("../controllers/tasksController");
const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getOneTask);

router.post("/", createTask);

module.exports = { tasksRouter: router };
