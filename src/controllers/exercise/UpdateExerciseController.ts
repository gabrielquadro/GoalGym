import { Request, Response } from "express";
import { UpdateExerciseService } from "../../services/exercise/UpdateExerciseService";

class UpdateExerciseController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const {
            exercise_id,
            name,
            repetitions,
            sets,
            notes,
            trainingId
        } = request.body;

        const updateExerciseService = new UpdateExerciseService();
        const exercise = await updateExerciseService.execute({
            user_id,
            exercise_id,
            name,
            repetitions,
            sets,
            notes,
            trainingId
        })

        return response.json(exercise);
    }
}

export { UpdateExerciseController }