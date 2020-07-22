const { Sequelize, Model } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({  
      name: Sequelize.STRING,
      date: Sequelize.DATE,
      starting_journey: Sequelize.STRING,
      ending_journey: Sequelize.STRING,
    }, {
      sequelize
    })
    return this
  }
}

module.exports = User