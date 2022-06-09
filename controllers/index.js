const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAll = (req, res, next) => {
    console.log(34);
    conn.query("SELECT * FROM users", function (err, data, fields) {
        console.log(err);
        console.log(data);
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };