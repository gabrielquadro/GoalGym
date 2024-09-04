import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { CreateTrainningController } from "./controllers/trainning/CreateTrainningController";
import { DetailTrainningController } from "./controllers/trainning/DetailTrainningController";
import { ListTrainningController } from "./controllers/trainning/ListTrainningController";
import { UpdateTrainningController } from "./controllers/trainning/UpdateTrainningController";
import { DeleteTrainningController } from "./controllers/trainning/DeleteTrainningController";
import { CreateExerciseController } from "./controllers/exercise/CreateexerciseController";

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
router.put("/trainning", isAuthenticated, new UpdateTrainningController().handle)
router.delete("/trainning", isAuthenticated, new DeleteTrainningController().handle)

//Exercise routes
router.post("/exercise", isAuthenticated, new CreateExerciseController().handle)


export { router }