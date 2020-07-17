const { Router } = require("express")
const MapController =  require("./app/controllers/MapController")
const UsersController = require("./app/controllers/UsersController")



const routes = new Router()



routes.get("/deliveries", UsersController.index)
routes.post("/deliveries", UsersController.store)

routes.get("/deliveries/:id", MapController.index)



module.exports = routes
