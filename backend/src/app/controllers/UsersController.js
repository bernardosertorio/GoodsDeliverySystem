const User = require('../models/User')
const { startOfHour, parseISO, isBefore } = require("date-fns")
const  Yup = require("yup")


module.exports = {

  async index(req, res) {

    const { page = 1} = req.query

    const delivery = await User.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['id', 'name', 'date', 'starting_journey', 'ending_journey']
    })

    res.json(delivery)

  },

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      date: Yup.date().required(),
      starting_journey: Yup.string().required(),
      ending_journey: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({error:"Registration Error!"})
    }

    const { id, name, date, starting_journey, ending_journey } = req.body

    const deliveryAlreadyMade = await User.findOne({
      where: { name: req.body.name, date: req.body.date}
    })

    if (deliveryAlreadyMade) {
      return res.status(400).json({error: "Existing registration"})
    }

    const startTime = startOfHour(parseISO(date))

    if (isBefore(startTime, new Date())) {
      return res
        .status(400)
        .json({error: "Previous dates are invalid"})
    }

    const delivery = await User.create({
      id,
      name,
      date,
      starting_journey,
      ending_journey
    })

    return res.json(delivery)
  }

}