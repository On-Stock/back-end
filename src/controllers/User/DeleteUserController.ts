import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

interface UserRequest {
  email: string;
}


export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const {
      email,
    } = request.body as UserRequest;

    const deleteUser = await prismaClient.user.delete(
      {
        where: {
          email: email
        }
      }
    )
    return response.status(201).json({ deleteUser });
  }
}