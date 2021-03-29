'use strict';

module.exports = (err, req, res, next) => {
  res.status(404);
  res.json({
    route: req.path,
    message: err.message,
  });
};
