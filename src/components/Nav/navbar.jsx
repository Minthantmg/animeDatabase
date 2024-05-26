import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [sticky, setSticky] = useState(false);
    return (
        <nav
            className={`text-black flex flex-row bg-white border-b items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
                sticky ? "shadow-xl !bg-black" : ""
            }`}
        >
            <Link to="/">
                Logo
            </Link>
            <div>
                <ul className="flex gap-8">
                    <li><Link to="/anime">Anime</Link></li>
                    <li><Link to="/manga">Manga</Link></li>
                    <li><Link to="/trending">Trending</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;