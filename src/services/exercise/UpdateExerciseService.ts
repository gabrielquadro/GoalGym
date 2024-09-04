import prismaClient from "../../prisma"

interface ExerciseRequest {
    user_id: string;
    exercise_id: string;
    name: string;
    repetitions: number;
    sets: number;
    notes: string;
    trainingId: string
}

class UpdateExerciseService {
    async execute({ user_id, exercise_id, name, repetitions, sets, notes, trainingId }: ExerciseRequest) {
        const existingTExercise = await prismaClient.exercise.findUnique({
            where: {
                id: exercise_id,
            },
        });

        if (!existingTExercise) {
            throw new Error("Exercise not found");
        }


        const updatedExercise = await prismaClient.exercise.update({
            where: {
                id: exercise_id,
            },
            data: {
                id: exercise_id,
                name: name,
                repetitions: repetitions,
                sets: sets,
                notes: notes,
                trainingId: trainingId
            }
        });

        return updatedExercise;

    }
}

export { UpdateExerciseService }