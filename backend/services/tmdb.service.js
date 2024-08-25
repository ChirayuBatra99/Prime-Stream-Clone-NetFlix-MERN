// import { ENV_VARS } from "../config/envVars.js";
// import axios from "axios";

// export const fetchmovies = async(url) =>{

// const options = {
//     // method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY,
//     }
//   };
  
//     const res=  await axios.get(url, options)
//     if(res.status !== 201)
//         throw new Error('Failed to fetch from the movie database', res.statusText)
//     console.log("coming here");
    
//     return res.data;

// }

import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchmovies = async (url) => {
	const options = {
		headers: {
			accept: "application/json",
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,

		},
	};

	const response = await axios.get(url, options);

	if (response.status !== 200) {
		throw new Error("Failed to fetch data from TMDB" + response.statusText);
	}

	return response.data;
};








// import axios from "axios";
// import { ENV_VARS } from "../config/envVars.js";

// export const fetchmovies = async (url) => {
// 	const options = {
// 		headers: {
// 			accept: "application/json",
// 			Authorization: "Bearer" + ENV_VARS.TMDB_API_KEY,
// 		},
// 	};

// 	const response = await axios.get(url, options);

// 	if (response.status !== 200) {
// 		throw new Error("Failed to fetch data from TMDB" + response.statusText);
// 	}

// 	return response.data;
// };