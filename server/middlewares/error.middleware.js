const errorMiddleware = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({sucess: false, error: err.message || 'Server Error'});
}
export default errorMiddleware;