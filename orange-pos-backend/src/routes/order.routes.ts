import express from "express";
import { getOrders, createOrder } from "../controllers/order.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = express.Router();
router.get("/", authenticateJWT, getOrders);
router.post("/", authenticateJWT, createOrder);

export default router;
