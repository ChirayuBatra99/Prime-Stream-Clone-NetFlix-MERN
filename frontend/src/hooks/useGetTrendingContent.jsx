import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(`/api/v1/movies/50/trailer`);
			setTrendingContent(res.data.message);
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent };
};
export default useGetTrendingContent;
















// import { useEffect, useState } from "react";
// import axios from "axios";

// const UseGetTrendingContent = () => {
//     const [trendingContent, setTrendingContent] = useState([""]);

    
//     useEffect(() => {
//         const getTrendingContent = async () => {
//             try {
//                 const res = await axios.get(`/api/v1/movies/16/trailer`);
//                 setTrendingContent(res.data.content);
//                 console.log("content",res.data.content);
                
//             } catch (error) {
//                 console.error("Error fetching trending content:", error);
//             }
//         };
        
//         getTrendingContent();
//     }, []);


//     return (
//         <div>
           
//         </div>
//     );
// };

// export default UseGetTrendingContent;



















// import { useEffect, useState } from "react";
// // import { useContentStore } from "../store/content";
// import axios from "axios";

// const UseGetTrendingContent = () => {
// 	const [trendingContent, setTrendingContent] = useState(null);
// 	// const { contentType } = useContentStore();

// 	useEffect(() => {
// 		const getTrendingContent = async () => {
// 			const res = await axios.get(`/api/v1/movies/trending`);
// 			setTrendingContent(res.data.content);
// 		};
//         console.log(trendingContent);
        
// 		getTrendingContent();
// 	}, []);

// 	return(
//         <div>
//             {trendingContent}
//         </div>
//     );
// };
// export default UseGetTrendingContent;




