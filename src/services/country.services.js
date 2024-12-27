import createHttpError from "http-errors";
import Country from "../models/Country.js";

const getCountry = async (region) => {
    try {
        const filter = region ? {region} : {};
        const countries = await Country.find(filter);

        if (!countries || countries.length === 0) {
            throw new createHttpError(404, "No countries found");
        }

        return countries;
    } catch (error) {
        throw new createHttpError(500, error?.message);
    }
};

export const countryServices = {
    getCountry
};