import prismaClient from "../../prisma";

interface Detailrequest {
    exercise_id: string,
}

class DetailExerciseService {
    async execute({ exercise_id }: Detailrequest) {

        const exercise = await prismaClient.exercise.findFirst({
            where: {
                id: exercise_id
            },
        })

        return { exercise }
    }
}

export { DetailExerciseService }