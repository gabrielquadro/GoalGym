import { Request, Response } from "express";
import { DeleteExerciseService } from "../../services/exercise/DeleteExerciseService";

class DeleteExerciseController {
    async handle(request: Request, response: Response) {
        const exercise_id = request.query.exercise_id as string;

        const deleteExerciseService = new DeleteExerciseService();

        try {
            const deleteExercise = await deleteExerciseService.execute({
                exercise_id,
            });

            return response.json(deleteExercise);

        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { DeleteExerciseController };