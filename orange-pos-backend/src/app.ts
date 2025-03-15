import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import routes from "./routes";  // นำเข้าทุก Route ที่รวมใน index.ts
import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(cors());
app.use(express.json());

// Limit Request Rate
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// ใช้งาน Routes
app.use("/api", routes);

// ใช้งาน Middleware จัดการ Error
app.use(errorHandler);

export default app;
