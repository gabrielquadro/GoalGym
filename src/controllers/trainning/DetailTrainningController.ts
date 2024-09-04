import { Request, Response } from "express";
import { DetailTrainningService } from "../../services/trainning/DetailTrainningService";

class DetailTrainningController {
    async handle(request: Request, response: Response) {
        const trainning_id = request.query.trainning_id as string;
        
        const trainningDetailService = new DetailTrainningService();

        const detail = await trainningDetailService.execute({
            trainning_id
        });

        return response.json(detail);
    }
}

export { DetailTrainningController }