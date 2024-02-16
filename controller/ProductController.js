const path = require("path");

exports.allProducts = (req, res, next) => {
  let productsPath = path.join(__dirname, "./../public/products.html");
  res.sendFile(productsPath);
};
