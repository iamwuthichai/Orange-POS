import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getOrders = async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany({
    include: { user: true },
  });
  res.json(orders);
};

export const createOrder = async (req: Request, res: Response) => {
  const { userId, total, status } = req.body;

  const order = await prisma.order.create({
    data: { userId, total, status },
  });

  res.json(order);
};
