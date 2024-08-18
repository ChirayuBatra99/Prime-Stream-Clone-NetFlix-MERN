import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
    MONGO_URI : process.env.DATABASE,
    PORT: process.env.PORT,
    JWT: process.env.JWT_SECRET,
    STATE: process.env.STATE,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
};