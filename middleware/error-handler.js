const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res.staus(500).json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
