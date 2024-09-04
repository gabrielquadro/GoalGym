import prismaClient from "../../prisma"

interface ExerciseRequest {
    exercise_id: string;
}

class DeleteExerciseService {
    async execute({ exercise_id }: ExerciseRequest) {
        const existingExercise = await prismaClient.exercise.findUnique({
            where: {
                id: exercise_id,
            },
        });

        if (!existingExercise) {
            throw new Error("Exercise not found");
        }

        const deleteExercise = await prismaClient.exercise.deleteMany({
            where: {
                id: exercise_id,
            }
        });

        return deleteExercise;

    }
}

export { DeleteExerciseService }