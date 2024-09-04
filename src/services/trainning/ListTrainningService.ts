import prismaClient from "../../prisma"

interface HaircutRequest {
    user_id: string;
}

class ListTrainningService {
    async execute({ user_id }: HaircutRequest) {
        const haircuts = await prismaClient.training.findMany({
            where: {
                userId: user_id,
            }
        })

        return haircuts
    }
}

export { ListTrainningService }