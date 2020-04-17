const { Router } = require("express");
const PointController = require("./app/controllers/PointController");
const CategoriesController = require("./app/controllers/CategoriesController");

const routes = new Router();

routes.post("/points", PointController.store);
routes.get("/points", PointController.index);
routes.get("/points/:id", PointController.show);

routes.post("/categories", CategoriesController.store);
routes.get("/categories", CategoriesController.index);
routes.get("/categories/:categorieId", CategoriesController.show);

module.exports = routes;
