const Categories = require("../models/Categories");
const Point = require("../models/Point");

class CategoriesController {
  async store(request, response) {
    const categories = await Categories.create(request.body);

    return response.json(categories);
  }

  async index(request, response) {
    const categories = await Categories.findAll();

    return response.json(categories);
  }

  async show(request, response) {
    const { categorieId } = request.params;

    const categorie = await Categories.findOne({
      where: { id: categorieId }
    });

    return response.json(categorie);
  }
}

module.exports = new CategoriesController();
