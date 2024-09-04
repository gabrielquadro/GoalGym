import { Request, Response } from "express";
import { DeleteTrainningService } from "../../services/trainning/DeleteTrainningService";

class DeleteTrainningController {
    async handle(request: Request, response: Response) {
        const trainning_id = request.query.trainning_id as string;

        const deleteTrainningService = new DeleteTrainningService();
        
        try {
            const deletedTrainning = await deleteTrainningService.execute({
                trainning_id,
            });
            
            return response.json(deletedTrainning);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { DeleteTrainningController };