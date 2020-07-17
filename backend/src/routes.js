import { Router } from "express"
import MapController from "./app/controllers/MapController"
import UsersController from "./app/controllers/UsersController"



const routes = new Router()



routes.get("/deliveries", UsersController.index)
routes.post("/deliveries", UsersController.store)

routes.get("/deliveries/:id", MapController.index)



export default routes
