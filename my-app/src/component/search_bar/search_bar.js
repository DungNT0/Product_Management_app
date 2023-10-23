import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css"
import "./search_bar.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
    return (
        <div class="SearchBar">
            <div id="sort_bar">
                <input type="text" placeholder="Search..." id="srchbar"></input> <br/>
                <input type="checkbox" id="in_stock_check"></input>
                <label for = "in_stock_check"> Only show products in stock </label>
            </div>
        </div>
    );
};

export default SearchBar;