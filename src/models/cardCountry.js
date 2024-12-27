import mongoose from "mongoose";

const cardCountrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        },
        card: {
            type: String,
            required: false
        }
    },
    {
        timestamps: false,
    }
);


const cardCountry = mongoose.model("card_country", cardCountrySchema);
export default cardCountry;


