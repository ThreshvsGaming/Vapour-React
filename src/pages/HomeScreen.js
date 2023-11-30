import React from 'react'
import Header from "../components/Header";
import homeStyles from "./HomeScreen.module.css"
import {Outlet, Link} from 'react-router-dom'

function HomeScreen() {
    return (
        <div className={homeStyles.homeScreen}>
            <Header pageTitle="Home" isHomeScreen={true}/>
            <div className={homeStyles.content_section}>
                <div id="store-btn"><Link className={homeStyles.nav_btn} to="/Store"
                                          target="_self">Store</Link></div>
                <div id="library-btn"><Link className={homeStyles.nav_btn} to="/Library" target="_self">Game
                    Library</Link>
                </div>
                <div id="friends-btn"><Link className={homeStyles.nav_btn} to="/Friends"
                                            target="_self">Friends</Link></div>
            </div>
        </div>
    );
}

export default HomeScreen;
