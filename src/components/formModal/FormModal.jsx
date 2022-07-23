import React, { useState, useEffect } from 'react';
import './formModal.css'
import DropDownOption from "../dropdown/Dropdown"
const FormModal = ({ setEmployeeName, setStartDate, setEmail, setOfficeName, officeName, setDepartmentName, departmentName, setAttendanceName, attendanceName, roleName, setRoleName, positionName, setPositionName, directManagerName, setDirectManagerName, setToggleFormModal, toggleFormModal, onSubmitData, employeeNameErr, startDateErr, emailErr, departmentErr, positionErr }) => {
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
                            <div className="mb-2 col-6 wrap">
                                <span className="error">{employeeNameErr}</span>
                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" onChange={(e) => setEmployeeName(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-2 col-6 wrap">
                                <span className="error">{startDateErr}</span>
                                <label className="form-label" htmlFor="date">Start Date</label>
                                <div className="col-12" >
                                    <input className="form-control" id="date" type="date" onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="mb-2 col-6 wrap">
                                {/* <span className="error">hello</span> */}
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <div className="col-12" >
                                    <input className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="mb-2 col-6 wrap">
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="col-12" >
                                    <input className="form-control" id="email" onChange={((e) => setEmail(e.target.value))} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  end emp info */}
                </div>
                {/* office info */}
                <div className="office-info">
                    <p className="person-info-title">Office Info</p>

                    {/* officename */}
                    <div className="mb-2 wrap">
                        {/* <span className="error">{officeError}</span> */}
                        <label className="form-label">Office</label>
                        <div className="select-dropdown-wrapper" onClick={() => setOfficeNameToggle(!officeNameToggle)}>
                            <span>{`${officeName ? officeName : 'Name'}`}</span>
                            <i className="fa-solid fa-chevron-down icon-chevron"></i>
                            {officeNameToggle && <DropDownOption requiredDropdown="office" getSelectedOption={getSelectedOption} options={officeOption} />}
                        </div>
                    </div>
                    {/* end officename */}

                    {/* department,attendance */}
                    <div className="mb-2 ">
                        <div className="row">
                            <div className="col-6 wrap">
                                <span className="error">{departmentErr}</span>
                                <label className="form-label">Department</label>
                                <div className="select-dropdown-wrapper" onClick={() => setDepartmentNameToggle(!departmentNameToggle)}>
                                    <span>{`${departmentName ? departmentName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {departmentNameToggle && <DropDownOption requiredDropdown="department" getSelectedOption={getSelectedOption} options={departmentOption} />}
                                </div>
                            </div>
                            <div className="col-6 wrap">
                                {/* <span className="error">hello</span> */}
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
                    <div className="mb-2">
                        <div className="row">
                            <div className="col-6 wrap">
                                {/* <span className="error">hello</span> */}
                                <label className="form-label">Role</label>
                                <div className="select-dropdown-wrapper" onClick={() => setRoleNameToggle(!roleNameToggle)}>
                                    <span>{`${roleName ? roleName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {roleNameToggle && <DropDownOption requiredDropdown="role" getSelectedOption={getSelectedOption} options={roleOption} />}
                                </div>
                            </div>
                            <div className="col-6 wrap">
                                <span className="error">{positionErr}s</span>
                                <label className="form-label">Position</label>
                                <div className="select-dropdown-wrapper" onClick={() => setPositionToggle(!positionToggle)}>
                                    <span>{`${positionName ? positionName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {positionToggle && <DropDownOption requiredDropdown="position" getSelectedOption={getSelectedOption} options={positionOption} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end role, position */}

                    {/* DirectManager */}
                    <div className="mb-2">
                        <div className="row">
                            <div className="col-6 wrap">
                                {/* <span className="error">hello</span> */}
                                <label className="form-label">Direct Manger</label>
                                <div className="select-dropdown-wrapper" onClick={() => setDirectManagerToggle(!directManagerToggle)}>
                                    <span>{`${directManagerName ? directManagerName : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {directManagerToggle && <DropDownOption requiredDropdown="directmanager" getSelectedOption={getSelectedOption} options={directManagerOption} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Direcct Manager */}

                    {/* Work from home */}
                    <div className="work-from-home">
                        <p className="person-info-title">Work From Home</p>
                        <div className="allow-work-wrapper">
                            <input type="checkbox" name="workfromhome" id="workformhome" />
                            <label className="form-label ms-2" htmlFor="workformhome">Allow Employees To Work From Home</label>
                        </div>
                    </div>

                    <div className="btn-wrapper">
                        <button className="btn btn-close-form " onClick={() => setToggleFormModal(!toggleFormModal)}>Cancel</button>
                        <button className="btn btn-save" onClick={(e) => onSubmitData(e)}>Save</button>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default FormModal