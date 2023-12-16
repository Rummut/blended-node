const controllerWrapper = require("../utils/controllerWrapper");
const {
  registrationServices,
  loginServices,
} = require("../services/authServices");

const registration = controllerWrapper(async (req, res, next) => {
  const createdUser = await registrationServices(req.body);

  res.status(201).json(createdUser);
});

const login = controllerWrapper(async (req, res, next) => {
  const accessToken = await loginServices(req.body);

  res.status(201).json(accessToken);
});
module.exports = { registration, login };
