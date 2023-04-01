// modules
const asyncHandler = require('express-async-handler');
//
const proHandler = asyncHandler(async (err, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

module.exports = {
  proHandler,
};
