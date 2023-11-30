import React, {useEffect} from "react";
import './App.css';
import games from './data/GameDatabase'
import Home from './pages/HomeScreen'
import Friends from './pages/FriendScreen'
import Store from "./pages/StoreScreen"
import Library from "./pages/LibraryScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    // localStorage.clear();
    // Initialize AllGames and OwnedGames on first App load
    useEffect(() => {

        const gamesWithId = games.map((game, index) =>
            ({
                ...game, id: (index + 1)
            })
        );

        // Check if AllGames and OwnedGames are already present in localStorage
        const allGamesData = localStorage.getItem("AllGames");
        const ownedGamesData = localStorage.getItem("OwnedGames");

        if (!allGamesData) {
            localStorage.setItem("AllGames", JSON.stringify(gamesWithId));
        }

        if (!ownedGamesData) {
            localStorage.setItem("OwnedGames", JSON.stringify(gamesWithId.filter(game => game.owned)));
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Friends" element={<Friends/>}/>
                <Route path="/Store" element={<Store/>}/>
                <Route path="/Library" element={<Library/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
