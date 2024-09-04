import { Request, Response } from "express";
import { CreateExerciseService } from "../../services/exercise/CreateExerciseService";

class CreateExerciseController {
    async handle(request: Request, response: Response) {
        const { name, repetitions, sets, notes, trainingId } = request.body;

        const createExerciseService = new CreateExerciseService();
        const exercise = await createExerciseService.execute({
            name,
            repetitions,
            sets,
            notes,
            trainingId
        })

        return response.json(exercise)
    }
}
export { CreateExerciseController }