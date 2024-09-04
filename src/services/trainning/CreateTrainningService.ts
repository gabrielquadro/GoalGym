import prismaClient from "../../prisma";

interface TrainningRequest {
    user_id: string,
    name: string,
}

class CreateTrainningService {
    async execute({ user_id, name }: TrainningRequest) {
        if (!name) {
            throw new Error('Error')
        }


        const user = await prismaClient.user.findFirst({
            where:{
                id : user_id
            }
        })


        const haircut = prismaClient.training.create({
            data: {
                userId: user_id,
                name: name,
            }
        })

        return haircut;
    }
}
export { CreateTrainningService }