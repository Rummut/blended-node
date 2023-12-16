const express = require("express");
const validateBody = require("../utils/validation/validateBody");
const {
  createTasksValidationSchema,
  updateTaskValidationSchema,
} = require("../utils/validation/tasks-validation-schemas");
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  removeTask,
} = require("../controllers/tasksController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.use(auth);

router
  .route("/")
  .get(getAllTasks)
  .post(validateBody(createTasksValidationSchema), createTask);

router
  .route("/:id")
  .get(getOneTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(removeTask);

module.exports = { tasksRouter: router };
