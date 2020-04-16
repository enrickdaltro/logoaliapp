const Categories = require("../models/Categories");

class CategoriesController {
  async store(request, response) {
    const categories = await Categories.create(request.body);

    return response.json(categories);
  }

  async index(request, response) {
    const categories = await Categories.findAll();

    return response.json(categories);
  }
}

module.exports = new CategoriesController();
