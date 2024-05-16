// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./components/Nav/navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Anime from "./page/anime.jsx";
import Manga from "./page/manga.jsx";
import Trending from "./page/trending.jsx";
import Detail from "./page/detail.jsx";
import MangaDetail from "./page/mangaDetail.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Anime />} />
                <Route path="/anime" element={<Anime />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/mangaDetail/:id" element={<MangaDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;