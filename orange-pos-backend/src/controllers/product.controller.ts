import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (_req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, barcode, price, stock } = req.body;

  const product = await prisma.product.create({
    data: { name, barcode, price, stock },
  });

  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  // const { name, barcode, price, stock } = req.body;

  // const product = await prisma.product.update({
  //   where: {id: 1},
  //   data: { name, barcode, price, stock },
  // });

  // res.json(product);
  res.json([]);
};