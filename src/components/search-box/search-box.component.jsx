import React from "react";
import './search-box.style.css'

export const SearchBox = (props) => (
    <input
        className="search"
        type="search"
        onChange={props.handleChange}
        placeholder={props.placeholder}
    />
)