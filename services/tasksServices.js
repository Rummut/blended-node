const { readDb, writeDb } = require("../utils/db");
const crypto = require("crypto");
const HttpError = require("../utils/HttpError");

const getAllTasksService = async () => {
  return await readDb();
};
const getOneTaskService = async (id) => {
  const tasks = await readDb();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new HttpError(404);
  }
  return task;
};

const createTaskServices = async (body) => {
  const tasks = await readDb();
  const newTask = { ...body, id: crypto.randomUUID() };

  tasks.push(newTask);
  await writeDb(tasks);
  return newTask;
};

const updateTasksService = async (id, body) => {
  const tasks = await readDb();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new HttpError(404);
  }
  tasks.splice(taskIndex, 1, { ...tasks[taskIndex], ...body });
  await writeDb(tasks);

  return tasks[taskIndex];
};

const removeTaskService = async (id) => {
  const tasks = await readDb();
  const removeTaskIndex = tasks.findIndex((task) => task.id === id);
  if (removeTaskIndex === -1) {
    throw new HttpError(404);
  }
  tasks.splice(removeTaskIndex, 1);

  await writeDb(tasks);
};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskServices,
  updateTasksService,
  removeTaskService,
};
