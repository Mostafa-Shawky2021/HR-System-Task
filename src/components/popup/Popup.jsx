import React from 'react'
import './popup.css'
const Popup = ({ children }) => {
    return (
        <div className="popup-wrapper">
            {children}
        </div>

    )

}

export default Popup