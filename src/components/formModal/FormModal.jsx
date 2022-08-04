import React, { useState, useEffect, useRef } from 'react';
import './formModal.css'
import DropDownOption from "../dropdown/Dropdown"
const FormModal = ({
    setToggleFormModal,
    toggleFormModal,
    onSubmitData,
    setFormData,
    formData,
    onCloseFormModel
}) => {
    console.log()
    // toggle Dropdown modal
    const [officeNameToggle, setOfficeNameToggle] = useState(false)
    const [departmentNameToggle, setDepartmentNameToggle] = useState(false)
    const [attendanceNameToggle, setAttendanceNameToggle] = useState(false)
    const [roleNameToggle, setRoleNameToggle] = useState(false)
    const [positionToggle, setPositionToggle] = useState(false)
    const [directManagerToggle, setDirectManagerToggle] = useState(false)

    // Options displayed in dropdown menu
    const [officeOption, setOfficeOption] = useState(['Arabic Localizer', 'Arabic Localizer Alex'])
    const [departmentOption, setDepartmentOption] = useState(['Hr Head', 'Accountant', 'Development'])
    const [attendanceOption, setAttendanceOption] = useState(['Present', 'Absent', 'on Leave'])
    const [roleOption, setRoleOption] = useState(['employee', 'manager'])
    const [positionOption, setPositionOption] = useState(['Project Manager', 'HR'])
    const [directManagerOption, setDirectManagerOption] = useState(["Nabil Mahmoud", "Ahmed Mohamed"])

    useEffect(() => {
        const onKeyPress = (e) => {
            if (e.keyCode === 27 && toggleFormModal) {
                setToggleFormModal(false)
            }
        }
        document.body.addEventListener('keyup', onKeyPress)
        return () => {
            document.body.removeEventListener('keyup', onKeyPress)
        }
    }, [])
    // This function is get the selected from reusable drop down menu 
    const getSelectedOption = (requiredDropdown, value) => {

        if (requiredDropdown === 'office') {

            setFormData((prevState) => {
                return {
                    ...prevState,
                    officeName: {
                        ...prevState.officeName,
                        value: value
                    }
                }

            })
        } else if (requiredDropdown === 'department') {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    departmentName: {
                        ...prevState.departmentName,
                        value: value
                    }
                }
            })
        } else if (requiredDropdown === 'attendance') {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    attendanceName: {
                        ...prevState.attendanceName,
                        value: value
                    }
                }
            })
        } else if (requiredDropdown === 'role') {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    roleName: {
                        ...prevState.roleName,
                        value: value
                    }
                }

            })
        } else if (requiredDropdown === 'position') {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    positionName: {
                        ...prevState.positionName,
                        value: value
                    }
                }

            })
        } else if (requiredDropdown === 'directmanager') {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    directManagerName: {
                        ...prevState.directManagerName,
                        value: value
                    }
                }
            })
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
                        <div className="col-12 col-md-4">
                            <div className="img" style={{ textAlign: 'center', lineHeight: '100px', fontSize: '2rem', fontWeigt: 'bold' }}>Soon</div>
                        </div>
                        <div className="col-12 col-md-8 row">
                            <div className="mb-2 col-12 col-md-6 wrap">

                                <span className="error">{formData.employeeName.errMsg}</span>
                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name"
                                        onChange={
                                            (e) => setFormData((prevState) => {
                                                prevState.employeeName.value = e.target.value
                                                return prevState
                                            })} />
                                </div>
                            </div>

                            <div className="mb-2 col-12 col-md-6  wrap">
                                <span className="error">{formData.startDate.errMsg}</span>
                                <label className="form-label" htmlFor="date">Start Date</label>
                                <div className="col-12" >
                                    <input className="form-control" id="date" type="date"
                                        onChange={
                                            (e) => setFormData((prevState) => {
                                                prevState.startDate.value = e.target.value
                                                return prevState
                                            })} />
                                </div>
                            </div>

                            <div className="mb-2 col-12 col-md-6 wrap">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <div className="col-12" >
                                    <input className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="mb-2 col-12 col-md-6 wrap">
                                <span className="error">{formData.email.errMsg}</span>
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="col-12" >
                                    <input className="form-control" id="email" onChange={
                                        (e) => setFormData((prevState) => {
                                            prevState.email.value = e.target.value;
                                            return prevState
                                        })} />
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
                        <label className="form-label">Office</label>
                        <div className="select-dropdown-wrapper" onClick={() => setOfficeNameToggle(!officeNameToggle)}>
                            <span>{`${formData.officeName.value ? formData.officeName.value : 'Name'}`}</span>
                            <i className="fa-solid fa-chevron-down icon-chevron"></i>
                            {officeNameToggle && <DropDownOption requiredDropdown="office" getSelectedOption={getSelectedOption} options={officeOption} />}
                        </div>
                    </div>
                    {/* end officename */}

                    {/* department,attendance */}
                    <div className="mb-2 ">
                        <div className="row">
                            <div className="col-12 col-md-6 wrap">
                                <span className="error">{formData.departmentName.errMsg}</span>
                                <label className="form-label">Department</label>
                                <div className="select-dropdown-wrapper" onClick={() => setDepartmentNameToggle(!departmentNameToggle)}>
                                    <span>{`${formData.departmentName.value ? formData.departmentName.value : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {departmentNameToggle && <DropDownOption requiredDropdown="department" getSelectedOption={getSelectedOption} options={departmentOption} />}
                                </div>
                            </div>
                            <div className="col-12 col-md-6 wrap">
                                <label className="form-label">Office</label>
                                <div className="select-dropdown-wrapper" onClick={() => setAttendanceNameToggle(!attendanceNameToggle)}>
                                    <span>{`${formData.attendanceName.value ? formData.attendanceName.value : 'Select'}`}</span>
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
                            <div className="col-12 col-md-6 wrap">
                                <label className="form-label">Role</label>
                                <div className="select-dropdown-wrapper" onClick={() => setRoleNameToggle(!roleNameToggle)}>
                                    <span>{`${formData.roleName.value ? formData.roleName.value : 'Select'}`}</span>
                                    <i className="fa-solid fa-chevron-down icon-chevron"></i>
                                    {roleNameToggle && <DropDownOption requiredDropdown="role" getSelectedOption={getSelectedOption} options={roleOption} />}
                                </div>
                            </div>
                            <div className="col-12 col-md-6 wrap">
                                <span className="error">{formData.positionName.errMsg}</span>
                                <label className="form-label">Position</label>
                                <div className="select-dropdown-wrapper" onClick={() => setPositionToggle(!positionToggle)}>
                                    <span>{`${formData.positionName.value ? formData.positionName.value : 'Select'}`}</span>
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
                                    <span>{`${formData.directManagerName.value ? formData.directManagerName.value : 'Select'}`}</span>
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
                        <button className="btn btn-close-form" onClick={(e)=>onCloseFormModel(e)}>Cancel</button>
                        <button className="btn btn-save" onClick={(e) => onSubmitData(e)}>Save</button>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default FormModal