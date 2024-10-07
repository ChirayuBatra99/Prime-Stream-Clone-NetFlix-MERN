import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


const SearchHistoryPage = () => {

	return (
		<div className='bg-black text-white min-h-screen flex flex-col'>
            <Navbar />
            <div className="p-56 max-w-8xl">
            <p className="text-6xl">Under Build</p>
            <p className="text-3xl text-yellow-600">Sorry, the API used, recently caused an issue :|</p>
            </div>
		</div>
	);
};
export default SearchHistoryPage;