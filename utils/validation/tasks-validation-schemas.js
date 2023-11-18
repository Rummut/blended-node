const Joi = require("joi");

const createTasksValidationSchema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  completed: Joi.boolean(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTasksValidationSchema.extract("title").optional(),
    completed: createTasksValidationSchema.extract("completed").optional(),
  })
  .or("title", "completed");

module.exports = {
  createTasksValidationSchema,
  updateTaskValidationSchema,
};
