const errorHandler = (error, req, res, next) => {
    const {message = "Somthing went wrong please try again later", statusCode = 500} = error;
    res.status(statusCode).json({message});
};

module.exports = errorHandler;