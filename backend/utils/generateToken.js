import jwt from "jsonwebtoken";
import {ENV_VARS} from "../config/envVars.js"


export const generateAuthTokenAndCookie = (userId, res)=> {
    const token = jwt.sign( {userId}, ENV_VARS.JWT , {expiresIn: "15d"});
    res.cookie("cookie-netflix", token, {
      httpOnly: true,
      secure: ENV_VARS.STATE === "production",
      maxAge: 15*24*60*60*1000,
      sameSite: "strict",
    })
    return token;
}