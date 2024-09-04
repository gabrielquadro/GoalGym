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
import { ListByTrainningController } from "./controllers/exercise/ListByTrainningController";
import { DetailExerciseController } from "./controllers/exercise/DetailExerciseController";
import { UpdateExerciseController } from "./controllers/exercise/UpdateExerciseController";
import { DeleteExerciseController } from "./controllers/exercise/DeleteExerciseController";

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
router.get('/trainning/exercises', isAuthenticated, new ListByTrainningController().handle )
router.get("/exercise/detail", isAuthenticated, new DetailExerciseController().handle)
router.put("/exercise", isAuthenticated, new UpdateExerciseController().handle)
router.delete("/exercise", isAuthenticated, new DeleteExerciseController().handle)


export { router }