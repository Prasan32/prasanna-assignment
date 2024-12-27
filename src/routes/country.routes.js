import { Router } from 'express';
import { getCountry } from '../controllers/country.controllers.js';

const router = Router();

router.route('/countries').get(getCountry);

export default router;