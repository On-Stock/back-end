import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  photo: string;
}

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const {
      id,
      name,
      description,
      price,
      amount,
      photo,
    } = request.body as ProductRequest;

    const updateProduct = await prismaClient.product.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        price: price,
        amount: amount,
        photo: photo,
      }
    })

    return response.json("Produto alterado com sucesso!");
  }
}