import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string,
}

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //get token
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    //validate token
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        request.user_id = sub; //id user

        return next();

    } catch (err) {
        return response.status(401).end();
    }

    console.log(token);
}