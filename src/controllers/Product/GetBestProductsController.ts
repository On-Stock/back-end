import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetBestProductsController {
  async handle(request: Request, response: Response) {
    const result = await prismaClient.product.findMany({
      where: {
        description: 'best'
      }
    })

    return response.json(result);
  }
}