import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface CategoryRequest {
  name: string;
  description?: string,
}

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
    } = request.body as CategoryRequest;

    let categoryExist = await prismaClient.category.findUnique({
      where: {
        name
      }
    })

    if (categoryExist) {
      return response.json({ status: "failed", message: 'Esta categoria já está criada.' });
    }

    const result = await prismaClient.category.create({
      data: {
        name,
        description
      }
    })

    return response.status(201).json({ name, description });
  }
}