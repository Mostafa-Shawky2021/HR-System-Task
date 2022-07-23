import React, { useEffect, useRef } from 'react'
import './submenu.css'
const SubMenu = ({ subMenuToggle, setSubMenuToggle, subMenuElementRef }) => {


    useEffect(() => {
        const onBodyClickSubMenu = (e) => {
            console.log(e.target)
            if (subMenuElementRef.current.contains(e.target)) {
                return
            }
            setSubMenuToggle(false)
        }
        document.body.addEventListener('click', onBodyClickSubMenu);
        return () => {
            document.body.removeEventListener('click', onBodyClickSubMenu);
        }

    }, [])
    return (
        <div className="submenu-wrapper">
            <div className={`${subMenuToggle ? 'animate-submenu' : ''}  submenu`}>
                <div className="col">
                    <div className="office-details">
                        <p className="title">Office</p>
                        <p className="name">Arabic Localizer</p>
                        <p className="secondary-title">Joining Date</p>
                        <p className="seconday-name">12/12/2018</p>
                    </div>
                </div>
                <div className="col">
                    <div className="office-details">
                        <p className="title">Role</p>
                        <p className="name">Employee</p>
                        <p className="secondary-title">Manager</p>
                        <p className="seconday-name">Mohamed Tarek</p>
                    </div>

                </div>
                <div className="col">
                    <div className="office-details">
                        <p className="title">Copied Manager</p>
                        <p className="name">Mohamed Tarek</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SubMenu