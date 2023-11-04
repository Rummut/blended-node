const {
  getAllTasksService,
  getOneTaskService,
  createTaskServices,
} = require("../services/tasksServices");
const getAllTasks = async (req, res, next) => {
  const tasks = await getAllTasksService();
  res.status(200).json(tasks);
};

const getOneTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await getOneTaskService(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await createTaskServices(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllTasks, getOneTask, createTask };
