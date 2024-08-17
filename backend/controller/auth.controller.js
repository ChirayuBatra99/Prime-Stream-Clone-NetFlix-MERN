import  {User} from '../models/user.model.js'

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

        const newUser = new User({
            email: email,
            password: password,
            username: username,
            image: image
        })
        // const newUser = new User({
        //     email,
        //     password,
        //     password,
        //     image
        // })
        // The above can also be written->JS trick
        await newUser.save()
        console.log("user created");
        res.status(201).json({success: true, message: "user created"});
    }
    catch(error){
        console.log("error at signup controller", error.message);
        res.status(500).json({success:false, message:"Error At catch in signup controller"})
    }
}

export async function login(req,res){
    res.send("login route");
}

export async function logout(req,res){
    res.send("logout route");
}