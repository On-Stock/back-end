import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface CategoryRequest {
  id: string;
}

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const {
      id,
    } = request.body as CategoryRequest;

    const deleteCategory = await prismaClient.category.delete(
      {
        where: {
          id: id
        }
      }
    )

    return response.json({ status: "sucess", message: "Categoria deletada!" });
  }
}