import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface CategoryRequest {
  id: string;
  name: string;
  description: string;
}

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const {
      id,
      name,
      description,
    } = request.body as CategoryRequest;

    const updateProduct = await prismaClient.category.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
      }
    })

    return response.json("Categoria alterada com sucesso!");
  }
}