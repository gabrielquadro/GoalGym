import prismaClient from "../../prisma";

interface ExerciseRequest {
    name: string,
    repetitions: number,
    sets: number,
    notes: string,
    trainingId: string
}

class CreateExerciseService {
    async execute({
        name,
        repetitions,
        sets,
        notes,
        trainingId
    }: ExerciseRequest) {
        if (!name || !repetitions || !sets || !trainingId) {
            throw new Error('Error')
        }

        const exercise = prismaClient.exercise.create({
            data: {
                name: name,
                repetitions: repetitions,
                sets: sets,
                notes: notes,
                trainingId: trainingId
            }
        })

        return exercise;
    }
}
export { CreateExerciseService }