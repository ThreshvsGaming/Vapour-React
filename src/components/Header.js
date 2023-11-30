import React, {useState} from "react";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import headerStyles from "./Header.module.css";
import {Link, useLocation} from 'react-router-dom'
import Vapour from './vapour_logo.svg'

export default function Header({pageTitle, isHomeScreen}) {
    const [dropDownState, setDropDownState] = useState(
        {menu: false, profile: false})
    const location = useLocation();

    window.onclick = function (e) {
        if (!e.target.matches('.dropdown_btns')) {
            handleDropdown(e, true)
        }
    }

    function handleBackButton() {
        window.history.back();
    }

    function handleDropdown(event, closeAll) {
        //Make a default array with properties being all the props in the dropdownstate
        //and the values being false for easy dropdown toggling
        const defaultState = Object.fromEntries(Object.keys(dropDownState).map(key => {
            return [key, false];
        }))

        const {name} = event.target;
        closeAll ? setDropDownState(defaultState) :
            setDropDownState(prevState => (
                {
                    ...defaultState,
                    [name]: !prevState[`${name}`],
                })
            );

        event.stopPropagation();
    }

    function handleFocus(event) {
        const unused = dropDownState[`${event.target.name}`] ? event.target.blur() : event.target.focus();
    }

    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.page_title}>
                <h1><Link id={headerStyles.page_title} to="" target="_self"
                          title={`Refresh the ${pageTitle} page`}>{pageTitle}</Link>
                </h1>
            </div>

            <Link to="/">
                <img className={headerStyles.app_logo} src={Vapour} alt="Vapour logo" title="Vapour"/>
            </Link>

            {/*Back button*/}
            {!isHomeScreen && <div className={headerStyles.back_btn_container}>
                <button className={headerStyles.btns}
                        title="return to previous page" onClick={handleBackButton}>
                    <ArrowBackRoundedIcon className={headerStyles.mui_icons}/>
                </button>
            </div>}

            <div className={`${headerStyles.dropdown_btn_container} ${headerStyles.profile}`}>
                <button onClick={(e) => {
                    handleDropdown(e);
                    handleFocus(e);
                }}
                        name="profile"
                        className={`${headerStyles.btns} ${headerStyles.dropdown_btns}`}
                        id="profileBtn"
                        title="Profile">
                    <PersonRoundedIcon className={headerStyles.mui_icons}/>
                </button>
                {dropDownState.profile && <div id="profileDropdown" className={headerStyles.dropdown_content}>
                    <Link to="">Account</Link>
                    <Link to="">Inventory</Link>
                    <Link to="">Achievements</Link>
                    <Link to="">Log out</Link>
                </div>}
            </div>

            <div className={`${headerStyles.dropdown_btn_container} ${headerStyles.menu}`}>
                <button onClick={(e) => {
                    handleDropdown(e);
                    handleFocus(e);
                }}
                        name="menu"
                        className={`${headerStyles.btns} ${headerStyles.dropdown_btns}`}
                        id="menuBtn"
                        title="Menu">
                    <MenuRoundedIcon className={headerStyles.mui_icons}/>
                </button>
                {
                    dropDownState.menu && <div id="menuDropdown" className={headerStyles.dropdown_content}>
                        {location.pathname !== "/Home" && <Link to="/">Home</Link>}
                        {location.pathname !== "/Store" && <Link to="/Store">Store</Link>}
                        {location.pathname !== "/Library" && <Link to="/Library">Library</Link>}
                        {location.pathname !== "/Friends" && <Link to="/Friends">Friends</Link>}
                        {location.pathname !== "/Notifications" && <Link to="">Notifications</Link>}
                        {location.pathname !== "/Settings" && <Link to="">Settings</Link>}
                    </div>
                }
            </div>
        </div>
    )
        ;
}