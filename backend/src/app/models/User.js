const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({  
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      starting_journey: DataTypes.STRING,
      ending_journey: DataTypes.STRING,
    }, {
      sequelize
    })
    return this
  }
}

module.exports = User