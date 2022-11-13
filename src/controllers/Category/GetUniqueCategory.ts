import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class GetUniqueCategory {
  async handle(request: Request, response: Response) {

    const result = await prismaClient.category.findUnique({
      where: {
        id: request.params.categoryId
      }
    })

    console.log(result)

    return response.json(result);
  }
}