import express from "express";
import { getProducts, createProduct, updateProduct } from "../controllers/product.controller";
import { authenticateJWT } from "../middleware/auth.middleware";

const router = express.Router();
router.get("/", authenticateJWT, getProducts);
router.post("/", authenticateJWT, createProduct);
router.put("/", authenticateJWT, updateProduct);

export default router;
