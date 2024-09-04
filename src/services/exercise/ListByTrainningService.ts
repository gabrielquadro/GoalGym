import prismaClient from "../../prisma";

interface ExerciseRequest {
    trainning_id: string;
}

class ListByTrainningService {
    async execute({ trainning_id }: ExerciseRequest) {

        const findBytrainning = await prismaClient.exercise.findMany({
            where: {
                trainingId: trainning_id
            }
        })

        return findBytrainning;

    }
}

export { ListByTrainningService }