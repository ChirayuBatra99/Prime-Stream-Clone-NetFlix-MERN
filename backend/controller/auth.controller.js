import  {User} from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { generateAuthTokenAndCookie } from '../utils/generateToken.js';

export async function signup(req,res){
    try{
        const {email, password, username} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({success:false, message:"Invalid email"})
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
        if(!emailRegex.test(email)){
            return res.status(400).json({success: false, message: "invalid email"})
        }
        if(password.length < 6){
            return res.status(400).json({success: false, message: "password should be atleast 6 chars"})
        }
        const existingUserEmail= await User.findOne({email: email})
        if(existingUserEmail){
            return res.status(400).json({success: false, message: "User email already exists"})
        }
        const existingUserName= await User.findOne({username: username})
        if(existingUserName){
            return res.status(400).json({success: false, message: "User name already exists"})
        }
        const profilePictures = ["/img1.png", "/img2.png", "/img3.png"];
        const image = profilePictures[Math.floor(Math.random() * profilePictures.length)];
        var salt = bcryptjs.genSaltSync(10);
        var hash = bcryptjs.hashSync(password, salt);

        const newUser = new User({
            email: email,
            password: hash,
            username: username,
            image: image
        })
        if(newUser)
        {
            generateAuthTokenAndCookie(newUser._id, res);
            await newUser.save();
            console.log("user created");
            res.status(201).json({success: true, message: "user created"});
        }
        else
        {
            res.status(400).json({success:false, message: "unable to create user"})

        }
        // const newUser = new User({
        //     email,
        //     password,
        //     password,
        //     image
        // })
        // The above can also be written->JS trick
       
    }
    catch(error){
        console.log("error at signup controller", error.message);
        res.status(500).json({success:false, message:"Error At catch in signup controller"})
    }
}

export async function login(req,res){
    try{
        const {email, password}= req.body;
        if(!email || !password)
            return res.status(401).json({success: false, message: "Provide all details please"});
        const existUser = await User.findOne({email: email});
        if(!existUser)
        {
            return res.status(401).json({success: false, message: "Email is not signup yet"});
        }
        const isPasswordCorrect = await bcryptjs.compare(password, existUser.password)
        if(!isPasswordCorrect)
            return res.status(401).json({success: false, message: "Password is incorrect"})
        generateAuthTokenAndCookie(existUser._id, res)
        res.status(201).json({
             success: true,
             message: "useer logged in successfully",
             user: {
                ...existUser._doc,
                password: "",
             }
            })
    } 
    catch(error){
        res.status(500).json({success: false, message: "catch error, unable to log in"})
        console.log("cant log in, catch block", error.message);
    }

}

export async function logout(req,res){
    try{
        res.clearCookie("cookie-netflix")
        res.status(201).json({success: true, message:"successfully logged out"})
    } catch(error) {
        res.status(400).json({success: false, message: "couldnt log out, sorry"})
        console.log("unable to logout api", error.message);
    }
}