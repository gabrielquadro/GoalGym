import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AuthUserRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthUserRequest) {
        //email exists?
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Email/password incorrect!")
        }
        //verify password
        const passwordMatch = await compare(password, user?.password)
        
        if (!passwordMatch) {
            throw new Error("Email/password incorrect!")
        }

        //generate token JWT
        const token = sign({
            name: user.name,
            email: user.email,
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        )


        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token,
        }
    }
}

export { AuthUserService }