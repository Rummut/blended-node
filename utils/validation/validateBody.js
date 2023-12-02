const { valid } = require("joi");
const HttpError = require("../HttpError");

const validateBody = (validationSchema) => {
  return function (req, res, next) {
    const { error } = validationSchema.validate(req.body);
    if (error) {
      return next(new HttpError(406, `${error}`));
    }
    next();
  };
};

module.exports = validateBody;
