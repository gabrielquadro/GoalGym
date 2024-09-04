import { Request, Response } from "express";
import { CreateTrainningService } from "../../services/trainning/CreateTrainningService";

class CreateTrainningController {
    async handle(request: Request, response: Response) {
        const { name, price } = request.body;
        const user_id = request.user_id;

        const createTrainningService = new CreateTrainningService();
        const haircut = await createTrainningService.execute({
            user_id,
            name,
        })

        return response.json(haircut)
    }
}
export { CreateTrainningController }