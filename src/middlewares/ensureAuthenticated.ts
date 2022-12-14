
import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

type TokenPayload = {
  id?: string;
  role?: string;
  iat: number;
  exp: number;
}

export const ensuredAuthenticated = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({ error: "Token is missing" });
    }

    //verificar se o token está no formato certo
    //Ex: Bearer 3456789876555367
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      return response.status(401).json({ error: 'Token Error' });
    }

    //desestruturando o array do split
    const [scheme, token] = parts;

    //verificar se o scheme corresponde a Bearer
    if (!/^Bearer$/i.test(scheme)) {
      return response.status(401).json({ error: 'Wrong format token' });
    }

    try {
      verify(token, process.env.SECRET_JWT);

      const { id, role } = decode(token) as TokenPayload;
      request.userId = id
      request.userRole = role

      return next();
    } catch (err) {
      return response.status(401).json(err).end();
    }
  };
};
