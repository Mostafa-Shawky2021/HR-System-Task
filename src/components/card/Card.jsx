import React, { useState, useEffect, useRef } from 'react';
import SubMenu from '../submenu/SubMenu';
import "./card.css"
const Card = (
    {
        id,
        name,
        position,
        department,
        attendance,
        officeName,
        officeRole,
        officeCopiedManager,
        officeJoiningDate,
        officeManager,
        onDeleteEmployee
    }) => {
    const [subMenuToggle, setSubMenuToggle] = useState(false)
    // const [viewPort, setViewPort]  = useState(0)

    const subMenuWrapper = useRef(null)


    let attendanceStauts = {}

    if (attendance === "Present") {
        attendanceStauts = { className: 'present', label: 'Present' }
    } else if (attendance === "Absent") {
        attendanceStauts = { className: 'absent', label: 'Absent' }
    } else {
        attendanceStauts = { className: 'leave', label: 'On Leave' }
    }


    const truncateCharacter = (text)=> {
        if( text.length > 20 ) {
            return text.slice(0,20) + '...'
        } 
        return text
    }
    return (
        <>

            <div className="card-employee d-flex">
                <div className="user-control">
                    <div className="text-center">
                        <img src="/assets/header/useravatar.png" alt="employee-avatar" className="employee-avatar img-fluid" />
                    </div>
                    <div className="control d-flex align-items-center">
                        <button className='control-icon'><i className="fa-solid fa-pen icon"></i></button>
                        <button className='control-icon'><i className="fa-solid fa-pause icon"></i></button>
                        <button className='control-icon icon-trash'><i className="fa-solid fa-trash-can icon" onClick={() => onDeleteEmployee(id)}></i></button>
                    </div>
                </div>

                <div className="employee-details">
                    <div className="employee-name-wrapper">
                        {/* <p className="employee-name">{truncateCharacter(name)}</p> */}
                        <p className="employee-name">{name}</p>

                    </div>
                    <p className="job-title">{position}</p>
                    <p className="department">{department}</p>
                    <div className="user-status d-flex">
                        <div className={`${attendanceStauts.className} status`}>{attendanceStauts.label}</div>
                        <div className="icon-contact">
                            <i className="fa-solid fa-envelope icon"></i>
                            <i className="fa-solid fa-phone icon"></i>
                            <div className="submenu-parent" ref={subMenuWrapper}>
                                <i className="fa-solid fa-ellipsis-vertical icon" onClick={() => setSubMenuToggle(!subMenuToggle)}></i>
                                {/* submenu */}
                                <SubMenu
                                    subMenuToggle={subMenuToggle}
                                    setSubMenuToggle={setSubMenuToggle}
                                    subMenuElementRef={subMenuWrapper}
                                    officeName={officeName}
                                    officeRole={officeRole}
                                    officeCopiedManager={officeCopiedManager}
                                    officeJoiningDate={officeJoiningDate}
                                    officeManager={officeManager}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card