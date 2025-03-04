import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    // This function will be called whenever the input value changes
    const handleTermChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    // This function will be called when the search button is clicked
    const search = useCallback(() => {
        props.onSearch(searchTerm);
    }, [props, searchTerm]);

    return (
        <div className="SearchBar">
            <input placeholder="Enter the title of a Song" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;
