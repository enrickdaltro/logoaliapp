const { literal, where } = require("sequelize");
const Point = require("../models/Point");

class PointController {
  async store(request, response) {
    const point = await Point.create(request.body);

    return response.json(point);
  }

  async index(request, response) {
    const { latitude, longitude } = request.query;

    if (latitude && longitude) {
      const haversine = `(6371 * acos(cos(radians(${latitude}))
         * cos(radians(latitude))
         * cos(radians(longitude)
         - radians(${longitude}))
         + sin(radians(${latitude}))
         * sin(radians(latitude))))`;

      const points = await Point.findAll({
        where: where(literal(haversine), "<=", 10)
      });

      return response.json(points);
    }

    const users = await Point.findAll({});

    return response.json(users);
  }
}

module.exports = new PointController();
