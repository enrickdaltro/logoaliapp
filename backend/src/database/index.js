const Sequelize = require("sequelize");

const Point = require("../app/models/Point");
const Categories = require("../app/models/Categories");

const databaseConfig = require("../config/database");

const models = [Point, Categories];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
