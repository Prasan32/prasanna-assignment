import asyncHandler from "../middlewares/asyncHandler.js";
import { countryServices } from "../services/country.services.js";

export const getCountry = asyncHandler(async (req, res, next) => {
    const region = req.query.region;
    const countries = await countryServices.getCountry(region);
    return res.status(200).json(countries);
});

export const getSalesRep = asyncHandler(async (req, res, next) => {
    const salesReps = await countryServices.getSalesRep();
    return res.status(200).json(salesReps);
});