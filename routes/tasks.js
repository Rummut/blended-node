const express = require("express");
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  removeTask,
} = require("../controllers/tasksController");
const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getOneTask);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", removeTask);

module.exports = { tasksRouter: router };
