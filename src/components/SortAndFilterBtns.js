import React, {useEffect, useState} from "react";
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import sortAndFilterBtnStyles from './SortAndFilterBtn.module.css'
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

export default function SortAndFilterBtns({onSort, sortState}) {
    const [sortLabel, setSortLabel] = useState("");
    // Reset the child state when resetState changes
    useEffect(() => {
        if (sortState !== null)
            setSortLabel(sortState);
    }, [sortState]);

    const sortOptions = [
        {label: "(none)", value: ""},
        {label: "A-Z", value: "az"},
        {label: "Z-A", value: "za"},
        {label: "Rating(high to low)", value: "rating-hl"},
        {label: "Price(low to high)", value: "price-lh"},
    ];

    function handleSort(e) {
        setSortLabel(e.target.value);
        onSort(e);
    }

    return (
        <>
            <div className={sortAndFilterBtnStyles.dropdown_btn_container}>
                <label htmlFor="sortBy" className={sortAndFilterBtnStyles.sort_label}>Sort by:</label>
                <select id="sortBy" className={sortAndFilterBtnStyles.sort_btn} title="Sort by..."
                        onChange={(e) => handleSort(e)}
                        value={sortLabel}>
                    {sortOptions.map(sortOption =>
                        (<option className={sortAndFilterBtnStyles.sort_options} key={sortOption.label}
                                 value={sortOption.value}>
                            {sortOption.label}
                        </option>))}
                </select>
            </div>
        </>
    );
}

// const [dropDownState, setDropDownState] = useState(
//     {

// window.onclick = function (e) {
//     if (!e.target.matches('.filter_btns,.sort_btn')) {
//         handleDropdown(e, true)
//     }
// }


// function handleFocus(event) {
//     const unused = dropDownState[`${event.target.name}`] ? event.target.blur() : event.target.focus();
// }

// function handleDropdown(event, closeAll) {
//     //Make a default array with properties being all the props in the dropdownstate
//     //and the values being false for easy dropdown toggling
//     const defaultState = Object.fromEntries(Object.keys(dropDownState).map(key => {
//         return [key, false];
//     }))
//
//     const {name} = event.target;
//     closeAll ? setDropDownState(defaultState) :
//         setDropDownState(prevState => (
//             {
//                 ...defaultState,
//                 [name]: !prevState[`${name}`],
//             })
//         );
//
//     event.stopPropagation();
// }

// return (
//     <>
//         {/*<div className={sortAndFilterBtnStyles.dropdown_btn_container}>*/}
//         {/*    /!*Filter btn*!/*/}
//         {/*    <button name="filter" className={sortAndFilterBtnStyles.filter_btn} title="Filter by..."*/}
//         {/*            onClick={(e) => {*/}
//         {/*                handleDropdown(e);*/}
//         {/*                handleFocus(e)*/}
//         {/*            }}>*/}
//         {/*        <FilterListRoundedIcon className={sortAndFilterBtnStyles.mui_icons}/>*/}
//         {/*    </button>*/}
//         {/*    {dropDownState.filter && <div className={sortAndFilterBtnStyles.dropdown_content}>*/}
//         {/*        <i onClick={() => handleFilter()}>(none)</i>*/}
//         {/*        <p onClick={() => handleFilter()}>Genre</p>*/}
//         {/*        <p>Publisher</p>*/}
//         {/*        <p>Not Owned</p>*/}
//         {/*    </div>}*/}
//         {/*</div>*/}
//
//         {/*Sort btn*/}
//         {/*<div className={sortAndFilterBtnStyles.dropdown_btn_container}>*/}
//
//         {/*    <button name="sort" className={sortAndFilterBtnStyles.sort_btn} title="Sort by..."*/}
//         {/*            onClick={(e) => {*/}
//         {/*                handleDropdown(e);*/}
//         {/*                handleFocus(e)*/}
//         {/*            }}>*/}
//         {/*        <SortRoundedIcon className={sortAndFilterBtnStyles.mui_icons}/>*/}
//         {/*    </button>*/}
//         {/*    {*/}
//         {/*        dropDownState.sort && <div className={sortAndFilterBtnStyles.dropdown_content}>*/}
//         {/*            {sortOptions.map(sortOption =>*/}
//         {/*                (<p key={sortOption.value} onClick={(e) => {*/}
//         {/*                    onSort(e, sortOption.value)*/}
//         {/*                }}>*/}
//         {/*                    {sortOption.label}*/}
//         {/*                </p>))}*/}
//         {/*        </div>*/}
//         {/*    }*/}
//         {/*</div>*/}
//
//         <div className={sortAndFilterBtnStyles.dropdown_btn_container}>
//
//             <label htmlFor="sortBy">Sort by:</label>
//             <select name="sort" className={sortAndFilterBtnStyles.sort_btn} title="Sort by..."
//                     onClick={(e) => {
//                         handleDropdown(e);
//                         handleFocus(e)
//                     }}> Sort BY
//                 {/*<SortRoundedIcon className={sortAndFilterBtnStyles.mui_icons}/>*/}
//             </select>
//
//             {/*{*/}
//             {/*    dropDownState.sort && <div className={sortAndFilterBtnStyles.dropdown_content}>*/}
//             {/*        {sortOptions.map(sortOption =>*/}
//             {/*            (<p key={sortOption.value} onClick={(e) => {*/}
//             {/*                onSort(e, sortOption.value)*/}
//             {/*            }}>*/}
//             {/*                {sortOption.label}*/}
//             {/*            </p>))}*/}
//             {/*    </div>*/}
//             {/*}*/}
//         </div>
//     </>
// );