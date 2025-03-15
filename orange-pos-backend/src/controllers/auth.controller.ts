import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { successResponse, errorResponse } from "../utils/response";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    res.json(successResponse(user, "User registered successfully"));
  } catch (error) {
    res.status(400).json(errorResponse("Registration failed"));
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json(errorResponse("Invalid credentials"));
    }

    const token = jwt.sign({ id: user?.id ?? "unknown", role: user?.role ?? "guest" }, JWT_SECRET, { expiresIn: "1h" });
    res.json(successResponse({ token }, "Login successful"));
  } catch (error) {
    res.status(400).json(errorResponse("Login failed"));
  }
};
