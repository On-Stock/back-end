import { hash } from 'bcryptjs';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

interface UserResquest {
  name: string;
  email: string;
  login: string;
  address: string | '';
  phone: string;
}


export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      email,
      login,
      address,
      phone
    } = request.body as UserResquest;

    const result = await prismaClient.user.update({
      where: {
        email: email
      },
      data: {
        name,
        email,
        login,
        address,
        phone
      }
    })

    return response.status(201).json({ name, email, login });
  }
}