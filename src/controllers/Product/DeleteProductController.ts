import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductRequest {
  id: string;
}

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const {
      id,
    } = request.body as ProductRequest;

    const deleteCategory = await prismaClient.product.delete(
      {
        where: {
          id: id
        }
      }
    )

    return response.json({ status: "sucess", message: "Produto deletado!" });
  }
}