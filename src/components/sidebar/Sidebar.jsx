import React, { useEffect } from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <ul className="list-unstyled list ">
                <li className="item">
                    <a href="#" className="item-link d-flex flex-column">
                        <i className="fa-solid fa-gauge icon-sidebar"></i>
                        <span className="text-sidebar">Dashboard</span>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="item-link d-flex flex-column">
                        <i className="fa-solid fa-display icon-sidebar"></i>
                        <span className="text-sidebar">Workplace</span>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="item-link d-flex flex-column">
                        <i className="fa-solid fa-mug-hot icon-sidebar"></i>
                        <span className="text-sidebar">Holidays</span>
                    </a>
                </li>
                <li className="item active">
                    <a href="#" className="item-link d-flex flex-column">
                        <i className="fa-solid fa-user-group icon-sidebar"></i>
                        <span className="text-sidebar">Employees</span>
                    </a>
                </li>
                <li className="item">
                    <a href="#" className="item-link d-flex flex-column">
                        <i className="fa-solid fa-hands-holding-circle icon-sidebar"></i>
                        <span className="text-sidebar">Inbound Requests</span>
                    </a>
                </li>
            </ul>
        </aside>
    )

}
export default Sidebar;