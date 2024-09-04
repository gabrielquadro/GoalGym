import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { CreateTrainningController } from "./controllers/trainning/CreateTrainningController";
import { DetailTrainningController } from "./controllers/trainning/DetailTrainningController";
import { ListTrainningController } from "./controllers/trainning/ListTrainningController";

const router = Router();

//User routes
router.post("/user", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated,  new DetailUserController().handle)
router.put("/user", isAuthenticated, new UpdateUserController().handle)

//Trainning routes
router.post("/trainning", isAuthenticated, new CreateTrainningController().handle)
router.get("/trainning/detail", isAuthenticated, new DetailTrainningController().handle)
router.get("/trainnings", isAuthenticated, new ListTrainningController().handle)

export { router }