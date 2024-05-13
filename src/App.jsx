import React from 'react';
import Navbar from "./components/Nav/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Anime from "./page/anime.jsx";
import Manga from "./page/manga.jsx";
import Trending from "./page/trending.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Anime />} />
                <Route path="/anime" element={<Anime />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/trending" element={<Trending />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;