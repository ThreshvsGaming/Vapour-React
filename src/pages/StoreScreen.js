import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import GameBox from "../components/GameBox";
import SortAndFilterBtns from "../components/SortAndFilterBtns";
import slfCommon from "./Store_Library_Friends_Common.module.css";
import slCommon from "./Store_Library_Common.module.css"
import storeStyles from "./StoreScreen.module.css"
import {searchGames} from "../functions/GameViewFunctions";
import GameInfo from "../components/GameInfo";

export default function StoreScreen() {
    const [allGames, setAllGames] = useState(() => JSON.parse(localStorage.getItem("AllGames")) || []);
    const [ownedGames, setOwnedGames] = useState(() => JSON.parse(localStorage.getItem("OwnedGames")) || []);
    const [displayedGames, setDisplayedGames] = useState(allGames);
    const [displayedInfo, setDisplayedInfo] = useState();

    // Save data to localStorage whenever storedData changes
    useEffect(() => {
        localStorage.setItem("OwnedGames", JSON.stringify(ownedGames));
    }, [ownedGames]);

    useEffect(() => {
        localStorage.setItem("AllGames", JSON.stringify(allGames));
    }, [allGames]);

    function handlePurchase(game) {

        setOwnedGames(prevOwned => {
            if (!prevOwned.some(obj => obj.id === game.id)) {
                game.owned = true;
                updateDB(game);
                return [...prevOwned, game];
            }
            return prevOwned; // No changes if the game is already owned
        });
    }

    function uninstall(game) {
        game.owned = false;
        let owned = JSON.parse(localStorage.getItem("OwnedGames")) || [];
        updateDB(game);
        setOwnedGames(owned.filter(eachGame => eachGame.id !== game.id));
    }

    function updateDB(game) {
        setAllGames(prevGames => {
            return prevGames.map(eachGame =>
                game.id === eachGame.id ? game : eachGame
            )
        });
    }

    const applySort = (event) => {
        let value = event.target.value;
        let sortedGames = [...displayedGames];

        // Apply filters based on user-specified conditions
        if (value === 'az') {
            sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        } else if (value === 'za') {
            sortedGames.sort((a, b) => b.title.localeCompare(a.title));
        } else if (value === "rating-lh") {
            sortedGames.sort((a, b) => a.ratings - b.ratings);
        } else if (value === "rating-hl") {
            sortedGames.sort((a, b) => b.ratings - a.ratings);
        } else if (value === "price-hl") {
            sortedGames.sort((a, b) => b.price - a.price);
        } else if (value === "price-lh") {
            sortedGames.sort((a, b) => a.price - b.price);
        } else {
            revertToDefaultView();
            return;
        }

        setDisplayedGames(sortedGames);
    };
    const revertToDefaultView = () => {
        setDisplayedGames(searchGames(allGames, "").filter(game => displayedGames.includes(game)));
    };

    const handleSearch = (text) => {
        setDisplayedGames(searchGames(allGames, text));
    }
    const displayInfo = (clickedGame) => {
        setDisplayedInfo(clickedGame);
    }

    return (
        <div className={storeStyles.storeScreen}>
            <Header pageTitle="Store" isHomeScreen={false}/>
            <div className={slfCommon.content_section}>
                <div className={`${slfCommon.games_grid_section} ${displayedInfo ? slfCommon.split : ''}`}>
                    <div className={storeStyles.fixed_section}>
                        <SearchBar onInputChange={handleSearch}/>
                    </div>
                    <div className={slCommon.all_games_tag}>
                        <h3 className={storeStyles.section__current_section}>All games</h3>
                        <SortAndFilterBtns
                            onSort={applySort} storeScreen={true}
                        />
                    </div>
                    <div className={slCommon.scrollable_game_section}>
                        {displayedGames.length > 0 ? displayedGames.map(game => <GameBox
                                key={game.id}
                                thisGame={game}
                                displayGameInfo={displayInfo}/>) :
                            <h3>Game not found!</h3>}
                    </div>
                </div>

                <div className={`${slfCommon.game_info_section} ${displayedInfo ? slfCommon.visible : ''}`}>
                    <div className={slfCommon.scrollable_info_or_chat_section}>
                        {
                            displayedInfo && <GameInfo game={displayedInfo}
                                                       purchase={handlePurchase}
                                                       play={() => {
                                                           alert("You really thought you were going to play it for free? Bruh");
                                                       }}
                                                       storeScreen={true}
                                                       uninstall={displayedInfo.owned ? uninstall : () => {
                                                       }}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}