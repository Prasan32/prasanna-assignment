import { Router } from 'express';
import { getCountry, getOptimal, getSalesRep } from '../controllers/country.controllers.js';

const router = Router();

router.route('/countries').get(getCountry);

router.route('/salesrep').get(getSalesRep);

router.route('/optimal').get(getOptimal);

export default router;