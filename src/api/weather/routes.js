import express from "express";
import * as weather from "./controller";

const router = express.Router()

router.get("/weather/search", weather.search);

export default router;