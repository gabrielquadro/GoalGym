import { Request, Response } from "express";
import { UpdateTrainningService } from "../../services/trainning/UpdateTrainningService";

class UpdateTrainningController {
    async handle(request: Request, response: Response) {
        const user_id = request.user_id;
        const { name, trainning_id } = request.body;

        const updateTrainningService = new UpdateTrainningService();
        const trainning = await updateTrainningService.execute({
            user_id,
            name,
            trainning_id,
        })

        return response.json(trainning);
    }
}

export { UpdateTrainningController }