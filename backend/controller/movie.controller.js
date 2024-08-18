import { fetchmovies } from "../services/tmdb.service.js";
import axios from "axios";



export async function getTrendingMovie(req, res){
    try{

        const data= await fetchmovies('http://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
        // const randomMovie= data;
        // console.log(randomMovie);
        
        const randomMovie= data.results[Math.floor(Math.random() * data.results?.length)]
        // console.log("hi");

        // console.log(randomMovie)
        res.json({success: true, content: randomMovie});
    }
    catch(error){
        res.status(500).json({success: false, message: "Internal server error--"})
        console.log("error occured in fetching movies", error.message);
        
    }
}

export async function getTrailer(req,res){
    try{
        console.log("ddd");
        const {id}= req.params;
        // const data= await fetchmovies(`http://api.themoviedb.org/3/tv/${id}/videos?language=en-US`);
        const data= await axios.get(`https://www.omdbapi.com/?i=tt38912${id}&apikey=b276f469`)
        //here enter only a two digit number above 12, 16 working
        console.log(data.data['Title']);    
        console.log(data.data['Plot']);
        console.log(data.data);
        
        
        res.status(201).json({success: true, message: data.data['Title']})
    }
    catch(error)
    {
        if (error.message.includes("404")) {
			return res.status(404).send(null);
		}
        console.log("error occured in catch block", error.message);
        res.status(400).json({success: false, message: error.message})
    }
}




export async function getMovieDetails(req,res){
    try{
        console.log("ddd");
        const {id}= req.params;
        const data= await axios.get(`https://www.omdbapi.com/?i=tt38912${id}&apikey=b276f469`)
        //here enter only a two digit number above
        console.log(data.data['Plot']);
        
        res.status(201).json({success: true, trailers: data.results})
    }
    catch(error)
    {
        if (error.message.includes("404")) {
			return res.status(404).send(null);
		}
        console.log("error occured in catch block", error.message);
        res.status(400).json({success: false, message: error.message})
    }
}

export async function getSimilarMovies(req,res){
//    yet to do
}