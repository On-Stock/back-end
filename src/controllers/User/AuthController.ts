import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { generateToken } from '../../../utils/utilities';
import { prismaClient } from '../../database/prismaClient';

export class AuthController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email || !password) {

      return console.log(`email: ${email}, password: ${password}`);
    }
    console.log(`email: ${email}, password: ${password}`);


    const user = await prismaClient.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      return response.json({ failed: "Email ou senha incorretos." })
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return response.json({ failed: "Email ou senha incorretos." })
    }

    const token = generateToken({ id: user.id, role: user.role })

    return response.json({ token: token, status: "success", role: user.role });
  }
}