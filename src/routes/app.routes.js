import { Router } from "express";
import countryRoutes from "./country.routes.js";
const router = Router();

router.use(countryRoutes);

export default router;