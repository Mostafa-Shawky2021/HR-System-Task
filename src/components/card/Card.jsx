import React from 'react';
import "./card.css"
const Card = (
    {
        name,
        position,
        department,
        attendance,
        officeName,
        officeRole,
        officeCopiedManager,
        officeJoiningDate,
        officeManager }) => {
    console.log(attendance)
    let attendanceStauts = {}
    if (attendance === "Present") {
        attendanceStauts = { className: 'present', label: 'Present' }
    } else if (attendance === "Absent") {
        attendanceStauts = { className: 'absent', label: 'Absent' }
    } else {
        attendanceStauts = { className: 'leave', label: 'On Leave' }
    }

    return (
        <>
            <div className="card-employee d-flex">
                <div className="user-control">
                    <div className="text-center">
                        <img src="/assets/header/useravatar.png" alt="employee-avatar" className="employee-avatar img-fluid" />
                    </div>
                    <div className="control d-flex align-items-center">
                        <button className='control-icon'><i className="fa-solid fa-pen"></i></button>
                        <button className='control-icon'><i className="fa-solid fa-pause"></i></button>
                        <button className='control-icon'><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>

                <div className="employee-details">
                    <p className="employee-name">{name}</p>
                    <p className="job-title">{position}</p>
                    <p className="department">{department}</p>
                    <div className="user-status d-flex">
                        <div className={`${attendanceStauts.className} status`}>{attendanceStauts.label}</div>
                        <div className="icon-contact">
                            <i className="fa-solid fa-envelope icon"></i>
                            <i className="fa-solid fa-phone icon"></i>
                            <i className="fa-solid fa-ellipsis-vertical icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card