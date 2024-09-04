import { Request, Response } from 'express'
import { ListByTrainningService } from '../../services/exercise/ListByTrainningService'

class ListByTrainningController {
    async handle(req: Request, res: Response) {
        const trainning_id = req.query.trainning_id as string;

        const listByTrainningService = new ListByTrainningService();

        const exercises = await listByTrainningService.execute({
            trainning_id
        });

        return res.json(exercises);

    }
}

export { ListByTrainningController }