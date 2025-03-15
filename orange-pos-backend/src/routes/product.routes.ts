import express from "express";
import { getProducts, createProduct } from "../controllers/product.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = express.Router();
router.get("/", authenticateJWT, getProducts);
router.post("/", authenticateJWT, createProduct);

export default router;
