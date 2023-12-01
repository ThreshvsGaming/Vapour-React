import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SortAndFilterBtns from "../components/SortAndFilterBtns";
import slfCommon from "./Store_Library_Friends_Common.module.css"
import slCommon from "./Store_Library_Common.module.css"
import libraryStyles from "./LibraryScreen.module.css"
import GameBox from "../components/GameBox";
import {searchGames} from "../functions/GameViewFunctions";
import GameInfo from "../components/GameInfo";

export default function LibraryScreen() {
    const [ownedGames, setOwnedGames] = useState(
        () => JSON.parse(localStorage.getItem("OwnedGames")) || [])
    const [allGames, setAllGames] = useState(() => JSON.parse(localStorage.getItem("AllGames")) || []);
    const [displayedGames, setDisplayedGames] = useState(ownedGames);
    const [displayedInfo, setDisplayedInfo] = useState(undefined);
    const [sortState, setSortState] = useState("");
    const [recentGames, setRecentGames] = useState(JSON.parse(localStorage.getItem("RecentGames")) || []);

    // Save data to localStorage whenever storedData changes
    useEffect(() => {
        localStorage.setItem("OwnedGames", JSON.stringify(ownedGames));
        localStorage.setItem("AllGames", JSON.stringify(allGames));

        setDisplayedGames(ownedGames);
        setDisplayedInfo(undefined);
    }, [ownedGames, allGames]);

    useEffect(() => {
        localStorage.setItem("RecentGames", JSON.stringify(recentGames))
    }, [recentGames]);

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedDataFromLocalStorage = JSON.parse(localStorage.getItem("OwnedGames")) || [];
        setOwnedGames(storedDataFromLocalStorage);
    }, []);

    const handleSearch = (text) => {
        setDisplayedGames(searchGames(ownedGames, text));
    }
    const displayInfo = (clickedGame) => {
        setDisplayedInfo(clickedGame);
    }

    function uninstall(game) {
        game.owned = false;
        let owned = JSON.parse(localStorage.getItem("OwnedGames")) || [];
        updateGameDB_withUninstalledGame(game);
        setOwnedGames(owned.filter(eachGame => eachGame.id !== game.id));

        setSortState("");
        setRecentGames(prevRecent => prevRecent.filter(eachGame => eachGame.id !== game.id));
    }

    function updateGameDB_withUninstalledGame(game) {
        setAllGames(prevGames => {
            return prevGames.map(eachGame =>
                game.id === eachGame.id ? game : eachGame
            )
        });
    }

    const applySort = (event) => {
        let value = event.target.value;
        setSortState(value);
        let sortedGames = [...displayedGames];

        // Apply filters based on user-specified conditions
        if (value === 'az') {
            sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'za') {
            sortedGames.sort((a, b) => b.title.localeCompare(a.title));
        } else if (value === "mp") {
            sortedGames.sort((a, b) => b.hoursPlayed - a.hoursPlayed);
        } else {
            revertToDefaultView();
            return;
        }

        setDisplayedGames(sortedGames);
    };

    function handleRecent(game) {
        setRecentGames(prevRecent => {
            let recentGames;
            if (prevRecent.some(eachGame => eachGame.id === game.id)) {
                recentGames = [game, ...(prevRecent.filter(eachGame => eachGame.id !== game.id))]
            } else {
                recentGames = [game, ...(prevRecent.slice(0))];
            }
            return recentGames;
        })
    }

    const revertToDefaultView = () => {
        setDisplayedGames(searchGames(ownedGames, "").filter(game => displayedGames.includes(game)));
    };

    return (
        <div className={libraryStyles.libraryScreen}>
            <Header pageTitle="Library" isHomeScreen={false}/>
            <div className={slfCommon.content_section}>
                <div className={`${slfCommon.games_grid_section} ${displayedInfo ? slfCommon.split : ''}`}>
                    <div className={libraryStyles.fixed_section}>
                        <SearchBar onInputChange={handleSearch}/>
                        <div className={libraryStyles.recent_games_tag}>
                            <h3 style={{color: "white"}}>Recent Games</h3>
                        </div>
                        <div className={libraryStyles.fixed_game_section}>
                            {recentGames.map(game => <GameBox
                                key={game.id}
                                thisGame={game}
                                displayGameInfo={displayInfo}/>)}
                        < /div>
                    </div>
                    <div className={slCommon.scrollable_game_section_container}>
                        <div className={slCommon.all_games_tag}><h3>All Games</h3>
                            <SortAndFilterBtns
                                onSort={applySort} sortState={sortState} storeScreen={false}
                            /></div>
                        <div className={slCommon.scrollable_game_section}>
                            {displayedGames.length > 0 ? displayedGames.map(game => <GameBox
                                    key={game.id}
                                    thisGame={game}
                                    displayGameInfo={displayInfo}/>) :
                                <h3>Game not found!</h3>}
                        </div>
                    </div>
                </div>

                <div
                    className={`${slfCommon.game_info_section} ${displayedInfo ? slfCommon.visible : ''}`}>
                    <div className={slfCommon.scrollable_info_or_chat_section}>
                        <div className="game-info">
                            {displayedInfo && <GameInfo game={displayedInfo}
                                                        play={handleRecent}
                                                        libScreen={true}
                                                        uninstall={displayedInfo.owned ? uninstall : () => {
                                                        }}/>}
                            {/*:*/}
                            {/* <h1 style={{textAlign: "center"}}>Select a game to view info</h1>}*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}