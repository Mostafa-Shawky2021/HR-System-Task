import React, { useState, useEffect, useRef } from 'react';
import useForm from '../../lib/useForm'
import DropDownOption from "../dropdown/Dropdown"
import ImageUpload from '../imageUpload/ImageUpload'
import './formModal.css'
const FormModal = ({
    setToggleFormModal,
    toggleFormModal,
    onCloseFormModel,
    setEmployees
}) => {

    const [dropDownSelected, setDropDownSelected] = useState({})
    const [handleSubmit, handleChange, errorForm] = useForm({
        name: {
            required: {
                validate: true,
                errMsg: 'the input is required',
            },
            minLength: {
                validate: true,
                value: 5,
                errMsg: 'the input must greater than 5 character',
            },
            maxLength: {
                validate: true,
                value: 10,
                errMsg: 'the input must less than 10 character'
            },
            pattern: {
                validate: true,
                value: /[A-Za-z]+/,
                errMsg: 'the input must contain only caracter',

            }
        },
        startDate: {
            required: {
                validate: true,
                errMsg: 'date is required',
            }
        },
        phone: {
            required: {
                validate: true,
            },
            pattern: {
                validate: true,
                value: /\d+/,
                errMsg: 'this input must contain only digits'
            }
        },
        email: {
            required: {
                validate: true,
                errMsg: 'the input is required',
            },
            pattern: {
                validate: true,
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errMsg: 'sorry email not valid'
            }

        },
        officeName: {
            required: {
                validate: true,
                errMsg: 'Sorry office Name is required'
            }
        },
        department: {
            required: {
                validate: true,
                errMsg: 'Sorry departmen is required'
            }
        }
    })

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

    const officeOptions = ['Arabic Localizer', 'Arabic Localizer Alex']
    const attendanceOptions = ['Present', 'Absent', 'on Leave']
    const departmentOptions = ['Hr Head', 'Accountant', 'Development']
    const roleOptions = ['employee', 'manager']
    const positionOptions = ['project Manager', 'HR']
    const directMnagerOptions = ['Nabil Mahmoud', 'Ahmed Mohamed']


    const onSubmitData = (data, formStatus) => {
        // this function will called with closure function which will be the event handler and will 
        // pass the form form data and form status    
        if (formStatus) {
            let employee = {
                name: data.name,
                position: data.position,
                department: data.department,
                attendance: data.attendance,
                office: {
                    name: data.officeName,
                    role: data.role,
                    copiedManager: data.directManager,
                    joiningDate: data.startDate,
                    manager: data.directManager,
                    email: data.email
                }
            }
            setEmployees((prevState) => {
                return [...prevState, employee]
            })
            setToggleFormModal(false)
        }
    }

    const handleDropDownSelected = (event) => {
        let selectName = event.currentTarget.getAttribute('name')
        let selectedOption = event.target.getAttribute('value')

        // pass this element to form hook
        handleChange({ [selectName]: selectedOption })
        // this will set the selected item from dropdown 
        setDropDownSelected({ ...dropDownSelected, [selectName]: selectedOption })

    }

    return (
        <div className='custom-modal'>
            <form className="form-modal" onSubmit={handleSubmit(onSubmitData)}>
                {/* employee info */}
                <div className="emp-info">
                    <h3 className="title">new employee</h3>
                    <p className="person-info-title">Personal Info</p>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <ImageUpload />
                        </div>
                        <div className="col-12 col-md-8 row">
                            <div className="mb-3 col-12 col-md-6 wrap">
                                <span className="error">{errorForm?.name}</span>
                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="col-12">
                                    <input
                                        className="form-control"
                                        id="name"
                                        onChange={handleChange('name')}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-md-6  wrap">
                                <span className="error">{errorForm?.startDate}</span>
                                <label className="form-label" htmlFor="date">Start Date</label>
                                <div className="col-12" >
                                    <input
                                        className="form-control"
                                        id="date"
                                        name="date"
                                        type="date"
                                        onChange={handleChange('startDate')}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 col-12 col-md-6 wrap">
                                <span className="error">{errorForm?.phone}</span>
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <div className="col-12" >
                                    <input className="form-control" id="phone" onChange={handleChange('phone')} />
                                </div>
                            </div>
                            <div className="mb-3 col-12 col-md-6 wrap">
                                <span className="error">{errorForm?.email}</span>
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="col-12" >
                                    <input
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange('email')}
                                    />
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
                        <span className="error">{errorForm?.officeName}</span>
                        <DropDownOption
                            name='officeName'
                            onClick={handleDropDownSelected}
                            dropDownSelected={dropDownSelected.officeName}
                            options={officeOptions}
                        >
                            {officeOptions.map((option) => (
                                <li key={option} className='submenu-item' value={option}>
                                    {option}
                                </li>))}
                        </DropDownOption>


                    </div>
                    {/* end officename */}

                    {/* department,attendance */}
                    <div className="mb-2 ">
                        <div className="row">
                            <div className="col-12 col-md-6 wrap">
                                <span className="error">{errorForm?.department}</span>
                                <label className="form-label">Department</label>
                                <DropDownOption
                                    onClick={handleDropDownSelected}
                                    dropDownSelected={dropDownSelected.department}
                                    options={departmentOptions}
                                    name='department'
                                >
                                    {departmentOptions.map((option) => (
                                        <li key={option} className='submenu-item' value={option}>
                                            {option}
                                        </li>))}
                                </DropDownOption>
                            </div>
                            <div className="col-12 col-md-6 wrap">
                                <label className="form-label">Attendance Profile</label>
                                <DropDownOption
                                    onClick={handleDropDownSelected}
                                    dropDownSelected={dropDownSelected.attendance}
                                    options={attendanceOptions}
                                    name='attendance'
                                >
                                    {attendanceOptions.map((option) => (
                                        <li key={option} className='submenu-item' value={option}>
                                            {option}
                                        </li>))}
                                </DropDownOption>

                            </div>
                        </div>
                    </div>
                    {/* end department, attendance */}

                    {/* role, position */}
                    <div className="mb-2">
                        <div className="row">
                            <div className="col-12 col-md-6 wrap">
                                <label className="form-label">Role</label>
                                <DropDownOption
                                    onClick={handleDropDownSelected}
                                    dropDownSelected={dropDownSelected.role}
                                    options={roleOptions}
                                    name='role'
                                >
                                    {roleOptions.map((option) => (
                                        <li key={option} className='submenu-item' value={option}>
                                            {option}
                                        </li>))}
                                </DropDownOption>
                            </div>
                            <div className="col-12 col-md-6 wrap">
                                {/* <span className="error">{formData.positionName.errMsg}</span> */}
                                <label className="form-label">Position</label>
                                <DropDownOption
                                    onClick={handleDropDownSelected}
                                    dropDownSelected={dropDownSelected.position}
                                    options={positionOptions}
                                    name='position'
                                >
                                    {positionOptions.map((option) => (
                                        <li key={option} className='submenu-item' value={option}>
                                            {option}
                                        </li>))}
                                </DropDownOption>
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
                                <DropDownOption
                                    onClick={handleDropDownSelected}
                                    dropDownSelected={dropDownSelected.directManager}
                                    options={directMnagerOptions}
                                    name='directManager'
                                >
                                    {directMnagerOptions.map((option) => (
                                        <li key={option} className='submenu-item' value={option}>
                                            {option}
                                        </li>))}
                                </DropDownOption>
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
                        <button className="btn btn-close-form" onClick={(e) => onCloseFormModel(e)}>Cancel</button>
                        <button className="btn btn-save">Save</button>
                    </div>
                </div>

            </form >
        </div >
    )
}

export default FormModal