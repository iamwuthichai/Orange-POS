import express from "express";
import { getPayments, createPayment } from "../controllers/payment.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = express.Router();
router.get("/", authenticateJWT, getPayments);
router.post("/", authenticateJWT, createPayment);

export default router;
