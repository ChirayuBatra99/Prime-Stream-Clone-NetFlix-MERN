import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();
	const { setContentType } = useContentStore();

	return (
		<header className=' absolute max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			
           

            <div className="flex flex-row items-center gap-10 z-50">
                <Link to='/home'>
                    <img src='prime-stream-logo.png' alt="n logo" className="w-40" />
                </Link>

                <div className="flex flex-row gap-5">
                    <Link to='/movie' className="hover:underline" onClick={()=> setContentType("movie")}>
                        Movies
                    </Link>
                    <Link to='/tvshows' className="hover:underline" onClick={()=> setContentType("tvshows")}>
                        TV Shows
                    </Link>
                    <Link to='/history' className="hover:underline" onClick={()=> setContentType("history")}>
                        Search History
                    </Link>
                </div>
            </div>

		</header>
	);
};
export default Navbar;