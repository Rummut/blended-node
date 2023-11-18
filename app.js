const express = require("express");
const { tasksRouter } = require("./routes/tasks");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use("/tasks", tasksRouter);

app.use(errorHandler);
module.exports = app;
