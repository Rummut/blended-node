const {
  getAllTasksService,
  getOneTaskService,
  createTaskServices,
  updateTasksService,
  removeTaskService,
} = require("../services/tasksServices");
const controllerWrapper = require("../utils/controllerWrapper");
const getAllTasks = async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.status(200).json(tasks);
};

const getOneTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await getOneTaskService(id);
  res.status(200).json(task);
});

const createTask = controllerWrapper(async (req, res, next) => {
  const newTask = await createTaskServices(req.body);
  res.status(201).json(newTask);
});

const updateTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const updateTask = await updateTasksService(id, req.body);
  res.status(200).json(updateTask);
});

const removeTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  await removeTaskService(id);
  res.status(200).json({ message: "Task was successfully deleted" });
});
module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  removeTask,
};
