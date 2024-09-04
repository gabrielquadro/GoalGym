import prismaClient from "../../prisma"

interface HaircutRequest {
    trainning_id: string;
}

class DeleteTrainningService {
    async execute({ trainning_id }: HaircutRequest) {
        const existingTrainning = await prismaClient.training.findUnique({
            where: {
                id: trainning_id,
            },
        });

        if (!existingTrainning) {
            throw new Error("Trainning not found");
        }

        const deleteExercise = await prismaClient.exercise.deleteMany({
            where: {
                trainingId: trainning_id,
            }
        });

        const deleteTrainning = await prismaClient.training.delete({
            where: {
                id: trainning_id,
            }
        });


        return deleteTrainning;

    }
}

export { DeleteTrainningService }