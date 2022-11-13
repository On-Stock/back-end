import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const result = await prismaClient.product.findMany()

    return response.json(result);
  }
}