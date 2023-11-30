import React, {useState} from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchBarStyles from "./SearchBar.module.css"

export default function SearchBar({onInputChange}) {
    const [textInput, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value);

        onInputChange(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={SearchBarStyles.search_form_container}>
            <form className={SearchBarStyles.search_form} onSubmit={handleSubmit}>
                <input className={SearchBarStyles.search_bar} type="text" placeholder="Search.." name="search"
                       value={textInput} autoComplete="off" autoFocus
                       onChange={handleChange}/>
                <button className={`${SearchBarStyles.btns} ${SearchBarStyles.search_btn}`} type="button">
                    <SearchRoundedIcon className={SearchBarStyles.mui_icons}/>
                </button>
            </form>
        </div>
    );
}