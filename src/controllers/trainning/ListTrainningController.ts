import { Request, Response } from "express";
import { ListTrainningService } from "../../services/trainning/ListTrainningService";

class ListTrainningController{
    async handle(request: Request, response: Response){
        const user_id = request.user_id;

        const listtrainning = new ListTrainningService();
        const trainnings = await listtrainning.execute({
            user_id,
        })

        return response.json(trainnings);
    }
}

export {ListTrainningController}