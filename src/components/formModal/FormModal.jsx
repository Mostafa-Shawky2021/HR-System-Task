import React, { useState, useEffect } from 'react';
import './formModal.css'
import DropDownOption from "../dropdown/Dropdown"
const FormModal = ({ setOfficeName, officeName, setDepartmentName, departmentName, setAttendanceName, attendanceName, roleName, setRoleName, positionName, setPositionName, directManagerName, setDirectManagerName, setToggleFormModal, toggleFormModal }) => {
    const [officeNameToggle, setOfficeNameToggle] = useState(false)
    const [departmentNameToggle, setDepartmentNameToggle] = useState(false)
    const [attendanceNameToggle, setAttendanceNameToggle] = useState(false)
    const [roleNameToggle, setRoleNameToggle] = useState(false)
    const [positionToggle, setPositionToggle] = useState(false)
    const [directManagerToggle, setDirectManagerToggle] = useState(false)

    const [officeOption, setOfficeOption] = useState(['Arabic Localizer', 'Arabic Localizer Alex'])
    const [departmentOption, setDepartmentOption] = useState(['Hr Head', 'Accountant', 'Development'])
    const [attendanceOption, setAttendanceOption] = useState(['Present', 'Absent', 'on Leave'])
    const [roleOption, setRoleOption] = useState(['employee', 'manager'])
    const [positionOption, setPositionOption] = useState(['Project Manager', 'HR'])
    const [directManagerOption, setDirectManagerOption] = useState(["Nabil Mahmoud", "Ahmed Mohamed"])
    const getSelectedOption = (requiredDropdown, value) => {
        if (requiredDropdown === 'office') {
            setOfficeName(value)
        } else if (requiredDropdown === 'department') {
            setDepartmentName(value)
        } else if (requiredDropdown === 'attendance') {
            setAttendanceName(value)
        } else if (requiredDropdown === 'role') {
            setRoleName(value)
        } else if (requiredDropdown === 'position') {
            setPositionName(value)
        } else if (requiredDropdown === 'directmanager') {
            setDirectManagerName(value)
        }
    }
    return (
        <div className='custom-modal'>
            <form className="form-modal">
                {/* employee info */}
                <div className="emp-info">
                    <h3 className="title">new employee</h3>
                    <p className="person-info-title">Personal Info</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="img"></div>
                        </div>
                        <div className="col-8 row">
                            <div className="mb-2 col-6">

                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="mb-2 col-6">
                                <label className="form-label" htmlFor="name">Start Date</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" type="date" />
                                </div>
                            </div>

                            <div className="mb-2 col-6">

                                <label className="form-label" htmlFor="name">Phone</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="mb-2 col-6">
                                <label className="form-label" htmlFor="name">Email</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  end emp info */}
                </div>
                {/* office info */}
                <div className="office-info">
                    <p className="office-info-title">Office Info</p>

                    {/* officename */}
                    <div className="mb-3">
                        <label className="form-label">Office</label>
                        <div className="select-dropdown-wrapper" onClick={() => setOfficeNameToggle(!officeNameToggle)}>
                            <span>{`${officeName ? officeName : 'Name'}`}</span>
                            <i className="fa-solid fa-chevron-down icon-chevron"></i>
                            {officeNameToggle && <DropDownOption requiredDropdown="office" getSelectedOption={getSelectedOption} options={officeOption} />}
                        </div>
                    </div>
                    {/* end officename */}

                    {/* department,attendance */}
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Department</label>
                                <div className="select-dropdown-wrapper" onClick={() => setDepartmentNameToggle(!departmentNameToggle)}>
                                    <span>{`${departmentName ? departmentName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {departmentNameToggle && <DropDownOption requiredDropdown="department" getSelectedOption={getSelectedOption} options={departmentOption} />}
                                </div>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Office</label>
                                <div className="select-dropdown-wrapper" onClick={() => setAttendanceNameToggle(!attendanceNameToggle)}>
                                    <span>{`${attendanceName ? attendanceName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {attendanceNameToggle && <DropDownOption requiredDropdown="attendance" getSelectedOption={getSelectedOption} options={attendanceOption} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end department, attendance */}

                    {/* role, position */}
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Role</label>
                                <div className="select-dropdown-wrapper" onClick={() => setRoleNameToggle(!roleNameToggle)}>
                                    <span>{`${roleName ? roleName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {roleNameToggle && <DropDownOption requiredDropdown="role" getSelectedOption={getSelectedOption} options={roleOption} />}
                                </div>
                            </div>
                            <div className="col-6">
                                <label className="form-label">Position</label>
                                <div className="select-dropdown-wrapper" onClick={() => setPositionToggle(!positionToggle)}>
                                    <span>{`${positionName ? positionName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {positionToggle && <DropDownOption requiredDropdown="position" getSelectedOption={getSelectedOption} options={positionOption} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-6">
                                <label className="form-label">Direct Manger</label>
                                <div className="select-dropdown-wrapper" onClick={() => setDirectManagerToggle(!directManagerToggle)}>
                                    <span>{`${directManagerName ? directManagerName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {directManagerToggle && <DropDownOption requiredDropdown="directmanager" getSelectedOption={getSelectedOption} options={directManagerOption} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btn-wrapper">
                        <button className="btn btn-danger" onClick={() => setToggleFormModal(!toggleFormModal)}>Cancel</button>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default FormModal