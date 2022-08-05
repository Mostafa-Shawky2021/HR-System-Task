import React from 'react'
import "./header.css"
const Header = () => {

    return (
        <header className="header d-flex" id="header">
            <div className="header-content d-flex ms-auto align-items-center">
                <p className="date">Thuresday,03 Oct 02:08:07 PM</p>
                <div className="signin-wrapper">
                    <button className="btn btn-signin">Sign in</button>
                </div>
                <div className='notification-wrapper'>
                    <span className="notification-count">1</span>
                    <i className="fa-solid fa-bell icon-notification"></i>
                </div>
                <div className='user-info-wrapper'>
                    <img src='/assets/header/useravatar.png' alt="user-avatar" className="avatar img-fluid" />
                    <span className="user-name">Mostafa Shawky</span>
                    <i className="fa-solid fa-chevron-down icon-chevron-down"></i>
                </div>
            </div>
        </header>
    )

}

export default Header
