const User = require('../models/User')

module.exports = {

  async index(req, res) {

    const { page = 1} = req.query

    const delivery = await User.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['id', 'name', 'date', '']
    })

  }

}