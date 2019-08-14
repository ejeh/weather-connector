import express from "express";

import auth from "./auth";
import adminRoute from "./admin";
import userRoute from "./user";
import teamRoute from "./team";
import fixturesRoute from "./fixtures";

const router = express.Router();

// Use Routes
router.use(teamRoute);
router.use(auth);
router.use(adminRoute);
router.use(userRoute);
router.use(fixturesRoute);

export default router;
