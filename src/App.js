import React, {useEffect} from "react";
import './App.css';
import games from './data/GameDatabase'
import friends from "./data/FriendsDatabase";
import Home from './pages/HomeScreen'
import Friends from './pages/FriendScreen'
import Store from "./pages/StoreScreen"
import Library from "./pages/LibraryScreen";
import {Routes, Route} from "react-router-dom";

function App() {
    //Uncomment the next line and refresh the Home page of the app, then re-comment it, to reset the database
    // localStorage.clear();
    // Initialize StoreGames, LibraryGames and friends on first App load
    useEffect(() => {
        const gamesWithId = games.map((game, index) =>
            ({
                ...game, id: (index + 1), hoursPlayed: Math.floor(Math.random() * 100)
            })
        );

        // Check if AllGames and OwnedGames are already present in localStorage
        const allGamesData = localStorage.getItem("AllGames");
        const ownedGamesData = localStorage.getItem("OwnedGames");
        const myFriends = localStorage.getItem("Friends");

        if (!allGamesData) {
            localStorage.setItem("AllGames", JSON.stringify(gamesWithId));
        }

        if (!ownedGamesData) {
            localStorage.setItem("OwnedGames", JSON.stringify(gamesWithId.filter(game => game.owned)));
        }
        if (!myFriends) {
            localStorage.setItem("Friends", JSON.stringify(friends));
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Friends" element={<Friends/>}/>
            <Route path="/Store" element={<Store/>}/>
            <Route path="/Library" element={<Library/>}/>
        </Routes>
    );
}

export default App;
