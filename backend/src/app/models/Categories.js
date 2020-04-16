const Sequelize = require("sequelize");

const { Model } = require("sequelize");

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Categories;
