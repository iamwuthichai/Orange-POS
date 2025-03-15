import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPayments = async (req: Request, res: Response) => {
    const payments = await prisma.payment.findMany({
        include: { order: true },
    });
    res.json(payments);
};

export const createPayment = async (req: Request, res: Response) => {
    const { orderId, method, status } = req.body;

    const payment = await prisma.payment.create({
        data: { orderId, method, status },
    });

    res.json(payment);
};
