import React from 'react'
import './search.css'
const Search = ({ className, placeholder, icon, iconStyle, onSearchInput }) => {
    return (
        <div className={`input-wrapper ${className ? className : ''}`}>
            {icon && <i className={`${icon} ${iconStyle ? iconStyle : ''}`}></i>}
            <input type="text" placeholder={`${placeholder ? placeholder : ''}`} onChange={(e) => onSearchInput(e.target.value)} />
        </div>
    )
}

export default Search