const path = require("path");

exports.index = (req, res, next) => {
  let indexPath = path.join(__dirname, "./../public/index.html");
  res.sendFile(indexPath);
};
