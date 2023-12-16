const User = require("../models/User");
const HttpError = require("../utils/HttpError");
const bcrypt = require("bcrypt");
const assignTokens = require("../utils/assignTokens");

const registrationServices = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (user) {
    throw new HttpError(409, "Email should be unique");
  }

  return await User.create({ ...body, password: hashedPassword });
};

const loginServices = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new HttpError(401, "Email or password is not correct");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new HttpError(401, "Email or password is not correct");
  }

  const { accessToken, refreshToken } = assignTokens(user);

  await User.findByIdAndUpdate(user._id, refreshToken);

  return accessToken;
};
module.exports = { registrationServices };
