const { readDb, writeDb } = require("../utils/db");
const crypto = require("crypto");
const HttpError = require("../utils/HttpError");
const Task = require("../models/Task");

const getAllTasksService = async () => {
  return await Task.find();
};
const getOneTaskService = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new HttpError(404);
  }
  return task;
};

const createTaskServices = async (body) => {
  return await Task.create(body);
};

const updateTasksService = async (id, body) => {
  const updatedTask = await Task.findByIdAndUpdate(id, body, {new: true});
  if (!updatedTask) {
    throw new HttpError(404);
  }
  return updatedTask;
};

const removeTaskService = async (id) => {
  const task = await Task.findByIdAndDelete(id);
 
  if (!task) {
    throw new HttpError(404);
  }
};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskServices,
  updateTasksService,
  removeTaskService,
};
