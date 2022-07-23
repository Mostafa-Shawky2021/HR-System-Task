import React from 'react'
import './popup.css'
const Popup = ({ setPopupDeleteToggle, employeeId }) => {
    console.log(employeeId)
    return (
        <div className="popup-wrapper">
            <div className="popup-delete-content">
                <p className="description">Are You sure you want to delete this employee? </p>
                <button className="btn btn-danger" onClick={() => console.log(employeeId)}>yes</button>
                <button className="btn btn-primary" onClick={() => setPopupDeleteToggle(false)}>no</button>
            </div>
        </div>

    )

}

export default Popup