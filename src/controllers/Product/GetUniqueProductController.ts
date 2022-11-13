import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetUniqueProductController {
  async handle(request: Request, response: Response) {

    const result = await prismaClient.product.findUnique({
      where: {
        id: request.params.productId
      }
    })

    return response.json(result);
  }
}