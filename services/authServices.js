const User = require("../models/User");
const HttpError = require("../utils/HttpError");

const registrationServices = async (body) => {
  const { email } = body;
  const user = await User.findOne({ email });

  if (user) {
    throw new HttpError(409, "Email should be unique");
  }

  return await User.create(body);
};

module.exports = { registrationServices };
