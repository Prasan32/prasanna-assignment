import createHttpError from "http-errors";
import Country from "../models/Country.js";
import { config } from "../config/envConfig.js";

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

const getSalesRep = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:${config.PORT}/countries`);
        const countries = await response.json();

        //making group of countries by region
        const regionData = countries.reduce((acc, country) => {
            acc[country.region] = acc[country.region] || [];
            acc[country.region].push(country.name);
            return acc;
        }, {});

        const result = Object.entries(regionData).map(([region, countries]) => {
            const totalCountries = countries.length;
            return {
                region,
                minSalesReq: Math.ceil(totalCountries / 7),
                maxSalesReq: Math.floor(totalCountries / 3),
            };
        });

        return result;
    } catch (error) {
        throw new createHttpError(500, error?.message);
    }
}

export const countryServices = {
    getCountry,
    getSalesRep
};