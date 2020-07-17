const User = require("../models/User")

module.exports = {
  async index(req, res) {
    const { id } = req.params 

    const delivery = await User.findByPk(id)

    res.json(delivery)
  }
}