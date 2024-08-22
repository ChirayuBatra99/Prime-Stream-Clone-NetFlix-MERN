import axios from "axios";
import {create} from "zustand";

export const useAuthStore = create((set)=> ({
    user: null,
    isLogginngIn: false,
    isLoggingOut: false,
    isSigningUp: false,
    isCheckingAuth: false,

    signup:  async(credentials) =>{
        set({isSigningUp: true});
        try{
            const response= await axios.post("/api/v1/auth/signup/", credentials)
            set({user: response.data.user, isSigningUp: false});
            console.log("user created successfully");
        }
        catch(error){
            console.log("catch block at signing up", error.message);
            set({ isSigningUp: false, user: null})
        }
    },

    login: async(credentials) =>{
        set({isLogginngIn: true});
        try{
            const response= await axios.post("/api/v1/auth/login", credentials)
            set({user: response.data.user, isLogginngIn:false})
            console.log("user logged in successfully");
        }
        catch(error){
            console.log("catch block at login ", error.message);
            set({isLogginngIn: false, user: null})
        }
    },

    logout: async(credentials)=>{
        set({isLoggingOut: true});
        try{
            const response= await axios.post("/api/v1/auth/logout");
            set({user: null, isLoggingOut: false})
            console.log("user logged out successfully");
        }
        catch(error){
            console.log("catch block at logout", error.message);
            set({isLoggingOut: false});
        }
    },

    authCheck: async() =>{
        set({isCheckingAuth: true});
        try{
            const response= await axios.get("/api/v1/auth/authCheck");
            set({user: response.data.user, isCheckingAuth: false});
        }
        catch(error){
            set({isCheckingAuth: false, user: null});
            console.log("failed authorisation catch block", error.message);
            
        }
    }


}))