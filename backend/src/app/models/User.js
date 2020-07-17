const { Model, DataTypes } = require('sequelize')

class DeliveryUser extends Model {

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

export default DeliveryUser