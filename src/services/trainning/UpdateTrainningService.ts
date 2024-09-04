import prismaClient from "../../prisma"

interface TrainningRequest {
    user_id: string;
    trainning_id: string;
    name: string;
}

class UpdateTrainningService {
    async execute({ user_id, trainning_id, name }: TrainningRequest) {
        const existingTrainning = await prismaClient.training.findUnique({
            where: {
                id: trainning_id,
            },
        });

        if (!existingTrainning) {
            throw new Error("Trainning not found");
        }


        const updatedHaircut = await prismaClient.training.update({
            where: {
                id: trainning_id,
            },
            data: {
                name: name,
            }
        });

        return updatedHaircut;

    }
}

export { UpdateTrainningService }