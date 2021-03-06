const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const User = require("../app/models/User")

const models = [User]

class Connection {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}


module.exports = new Connection