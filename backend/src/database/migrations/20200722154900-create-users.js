'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      starting_journey: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ending_journey: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
   
  },
  

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};

