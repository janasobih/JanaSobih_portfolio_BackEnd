// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";

//   if (process.env.NODE_ENV == "development") {
//     return res.status(err.statusCode).json({
//       status: err.status,
//       error: err,
//       message: err.message,
//       stack: err.stack,
//     });
//   } else {
//     if (err.isOperational) {
//       return res.status(err.statusCode).json({
//         status: err.status,
//         message: err.message,
//       });
//     }
//     return res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message || "Something went wrong",
//     });
//   }
// };

module.exports = (err, req, res, next) => {
  console.error("REAL ERROR:", err);
  console.error("STATUS CODE:", err.statusCode);
  console.error("STATUS:", err.status);

  const statusCode = Number(err.statusCode) || 500;
  const status = err.status || "error";

  return res.status(statusCode).json({
    status,
    message: err.message || "Something went wrong",
    error: err,
  });
};
