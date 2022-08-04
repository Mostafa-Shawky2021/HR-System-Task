import React, { useEffect, useState } from 'react';
import './sidebar.css'

const Sidebar = ({ employeesCount }) => {
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [viewPort, setViewPort] = useState(0)
    // useEffect(()=> {
    //     window.addEventListener('resize',function)



    // },[viewPort])
    const handleCloseSidebar = () => {
        setCloseSidebar(!closeSidebar)
        // Set pagewrapper dynamic
        const windowWidth = window.innerWidth;
        const sidebar = document.getElementById('sidebar')
        const sidebarWidth = sidebar.clientWidth;
        const pageWrapper = document.getElementById('page-wrapper')
      
        if (!closeSidebar) {
            document.getElementById('page-wrapper').style.left = "0px";
            document.getElementById('page-wrapper').style.width = "100%";

        } else {

            if (windowWidth >= 0 && windowWidth <= 768) {
                pageWrapper.style.left = '0px'
                pageWrapper.style.width = '100%'
                
            } else {
                const windowWidth = window.innerWidth;
                const sidebar = document.getElementById('sidebar')
                const sidebarWidth = sidebar.clientWidth;
                const pageWrapper = document.getElementById('page-wrapper')

                pageWrapper.style.left = `${sidebarWidth}px`
                pageWrapper.style.width = `${windowWidth - sidebarWidth}px`
            }

        }
    }

    return (
        <aside className={`${closeSidebar ? 'sidebar-close' : ''} sidebar`} id="sidebar">
            <div className="gear-icon" onClick={handleCloseSidebar}>
                <i className="fa-solid fa-gear icon"></i>
            </div>
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
                        <span className="employee-count">{employeesCount}</span>
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