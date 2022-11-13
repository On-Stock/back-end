import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductRequest {
  name: string;
  description?: string,
  price: number,
  amount: number,
  photo?: string
}

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      price,
      amount,
      photo
    } = request.body as ProductRequest;

    let productExists = await prismaClient.product.findUnique({
      where: {
        name
      }
    })

    if (productExists) {
      return response.json({ status: "failed", message: 'Este produto já está cadastrado.' });
    }

    const result = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        amount,
        photo
      }
    })

    return response.status(201).json({ name, description, price, amount, photo });
  }
}