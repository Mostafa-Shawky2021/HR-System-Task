import React, { useEffect, useRef } from 'react'
import './submenu.css'
const SubMenu = ({
    subMenuToggle,
    setSubMenuToggle,
    subMenuElementRef,
    officeName,
    officeRole,
    officeCopiedManager,
    officeJoiningDate,
    officeManager
}) => {

    useEffect(() => {
        const onBodyClickSubMenu = (e) => {
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
                        <p className="name">{officeName}</p>
                        <p className="secondary-title">Joining Date</p>
                        <p className="seconday-name">{officeJoiningDate}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="office-details">
                        <p className="title">Role</p>
                        <p className="name">{officeRole}</p>
                        <p className="secondary-title">Manager</p>
                        <p className="seconday-name">{officeManager}</p>
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