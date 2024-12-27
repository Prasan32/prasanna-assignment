import { Router } from 'express';
import { getCountry, getSalesRep } from '../controllers/country.controllers.js';

const router = Router();

router.route('/countries').get(getCountry);

router.route('/salesrep').get(getSalesRep);

export default router;