const User = require("../models/User");
const HttpError = require("../utils/HttpError");
const jwt = require("jsonwebtoken");
const assignTokens = require("../utils/assignTokens");
require("dotenv").config();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    return next(HttpError(401, "Not autorized"));
  }
  const decoded = jwt.decode(token);
  let user;
  try {
    jwt.verify(token, ACCESS_TOKEN_SECRET);

    user = await User.findById(decoded._id);

    if (user !== REFRESH_TOKEN_SECRET) {
      next(HttpError(401, "Not autorized"));
    }
    req.user = user;
  } catch (error) {
    if (error.name !== "TokenExpiredError") {
      return next(HttpError(401, "Not autorized"));
    }
    try {
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

      const { accessToken, refreshToken } = assignTokens(fetchedUser);
      await User.findByIdAndUpdate(user._id, { refreshToken });
      res.status(200).json({
        accessToken,
      });
    } catch (error) {
      next(HttpError(401, "RefreshToken is expired"));
    }
  }
};

module.exports = auth;
