import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductRequest {
  id: string;
  amount: number;

}

export class BuyProductController {
  async handle(request: Request, response: Response) {
    const {
      id,
      amount,
    } = request.body as ProductRequest;

    const buyProdcut = await prismaClient.product.update({
      where: {
        id: id,
      },
      data: {
        amount: amount,
      }
    })

    return response.status(200).json(buyProdcut);
  }
}