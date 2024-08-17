import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectionDB = async() => {
    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("DB connection successful");
    }
    catch(error){
        console.log("cant conenct to DB", error);
        process.exit(1);
        // Remember 1 means error, and 0 means success
    }
};

