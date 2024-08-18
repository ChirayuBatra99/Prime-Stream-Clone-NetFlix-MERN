import {User} from '../models/user.model.js';
import jwt from "jsonwebtoken";
import {ENV_VARS} from '../config/envVars.js'

export const protectRoute = async(req, res, next) =>{
    try{
		const token = req.cookies["cookie-netflix"];
        if(!token)
        {
            return res.status(401).json({status: false, message: "User doesnt even have a cookie"})
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT)
        if(!decoded)
        {
            return res.status(401).json({status: false, message: "user cookie cant be decoded"})
        }
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            res.status(401).json({status: false, message: "couldnt authentciate user bro"})
        }
        req.user= user;
        next();
    }
    catch(error)
    {
        console.log("coulnt authenticate user", error.message);
        res.status(401).json({success: false, message: "Came in catch block of authentciation"});
    }
} 