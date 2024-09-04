import { Request, Response } from "express";
import { DetailExerciseService } from "../../services/exercise/DetailExerciseService";

class DetailExerciseController {
    async handle(request: Request, response: Response) {
        const exercise_id = request.query.exercise_id as string;
        
        const detailExerciseService = new DetailExerciseService();

        const detail = await detailExerciseService.execute({
            exercise_id
        });

        return response.json(detail);
    }
}

export { DetailExerciseController }