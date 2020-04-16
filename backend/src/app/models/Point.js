const Sequelize = require("sequelize");

const { Model } = require("sequelize");

class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        avatar: Sequelize.STRING,
        title: Sequelize.STRING,
        categorie_id: Sequelize.NUMBER,
        latitude: Sequelize.DECIMAL(6, 9),
        longitude: Sequelize.DECIMAL(6, 9)
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Point;
