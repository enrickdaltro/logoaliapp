"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("points", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categorie_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      latitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
      },
      longitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("users");
  }
};
