import express from "express";
import weatherRoute from "./weather";

const router = express.Router();

// Use Routes
router.use(weatherRoute);

export default router;
