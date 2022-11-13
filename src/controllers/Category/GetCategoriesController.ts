import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetCategoriesController {
  async handle(request: Request, response: Response) {
    const result = await prismaClient.category.findMany()

    return response.json(result);
  }
}