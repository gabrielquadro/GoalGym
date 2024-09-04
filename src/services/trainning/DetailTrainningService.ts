import prismaClient from "../../prisma";

interface Detailrequest {
    trainning_id: string,
}

class DetailTrainningService {
    async execute({ trainning_id }: Detailrequest) {

        const trainning = await prismaClient.training.findFirst({
            where: {
                id: trainning_id
            },
        })

        return { trainning }
    }
}

export { DetailTrainningService }