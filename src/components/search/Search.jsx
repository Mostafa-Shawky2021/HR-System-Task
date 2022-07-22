import React from 'react'
import './search.css'
const Search = ({ className, placeholder, icon, iconStyle }) => {
    return (
        <div className={`input-wrapper ${className ? className : ''}`}>
            {icon && <i className={`${icon} ${iconStyle ? iconStyle : ''}`}></i>}
            <input type="text" placeholder={`${placeholder ? placeholder : ''}`} />
        </div>
    )
}

export default Search