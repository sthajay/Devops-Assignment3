const express = require("express");
const Router = express.Router();

const HomeController = require("./../controller/HomeController");
const ProductController = require("./../controller/ProductController");

Router.get(["/", "/index", "/home"], HomeController.index);
Router.get("/products", ProductController.allProducts);

module.exports = Router;
