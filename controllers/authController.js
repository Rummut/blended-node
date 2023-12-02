const controllerWrapper = require("../utils/controllerWrapper");
const { registrationServices } = require("../services/authServices");

const registration = controllerWrapper(async (req, res, next) => {
  const createdUser = await registrationServices(req.body);

  res.status(201).json(createdUser);
});

module.exports = { registration };
