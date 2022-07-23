import React, { useState, useEffect } from 'react';
import employeeData from "./data/employee.json"
import "./index.css"
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import SearchList from './components/search/Search'
import ListEmployee from './components/list/List'
import FormModal from './components/formModal/FormModal'

const App = () => {

    const [employees, setEmployees] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [formStatus, setFormStatus] = useState(false)
    const [popupDeleteToggle, setPopupDeleteToggle] = useState(false)

    // Form data 
    const [formData, setFormData] = useState({
        employeeName: { value: '', errMsg: '', validate: false },
        startDate: { value: '', errMsg: '', validate: false },
        email: { value: '', errMsg: '', validate: false },
        officeName: { value: '', errMsg: '', validate: true },
        departmentName: { value: '', errMsg: '', validate: false },
        attendanceName: { value: '', errMsg: '', validate: true },
        roleName: { value: '', errMsg: '', validate: true },
        positionName: { value: '', errMsg: '', validate: false },
        directManagerName: { value: '', errMsg: '', validate: true },

    })

    const [toggleFormModal, setToggleFormModal] = useState(true)
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        setEmployees(employeeData)
    }, [])

    const onSubmitData = (event) => {

        event.preventDefault();

        // validation Form
        if (formData.employeeName.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.employeeName.errMsg = 'employee name is required'
                prevState.employeeName.validate = false;
                return prevState
            })
        } else {
            setFormData((prevState) => {
                prevState.employeeName.errMsg = ''
                prevState.employeeName.validate = true;
                return prevState
            })
        }

        if (formData.startDate.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.startDate.errMsg = 'date field is required'
                prevState.startDate.validate = false;
                return prevState
            })
        } else {
            setFormData((prevState) => {
                prevState.startDate.errMsg = ''
                prevState.startDate.validate = true;
                return prevState
            })
        }
        if (formData.email.value.search(emailRegex) === -1) {
            setFormData((prevState) => {
                prevState.email.errMsg = 'Email must be valid'
                prevState.email.validate = false;
                return prevState
            })
        } else {
            setFormData((prevState) => {
                prevState.email.errMsg = ''
                prevState.email.validate = true;
                return prevState
            })
        }
        if (formData.departmentName.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.departmentName.errMsg = 'Department is required'
                prevState.departmentName.validate = false;
                return prevState
            })
        } else {
            setFormData((prevState) => {
                prevState.departmentName.errMsg = ''
                prevState.departmentName.validate = true;
                return prevState
            })
        }
        if (formData.positionName.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.positionName.errMsg = 'Position is required'
                prevState.positionName.validate = false;
                return prevState
            })
        } else {
            setFormData((prevState) => {
                prevState.positionName.errMsg = ''
                prevState.positionName.validate = true;
                return prevState
            })
        }


        let formStatusIterate = Object.entries(formData).some(([key, value]) => {
            // false meaning there is error in inputs   
            return value.validate === false
        })

        if (!formStatusIterate) {
            // no problem with error form

            setFormStatus(true)
            let employee = {
                id: employees.length,
                name: formData.employeeName.value,
                position: formData.positionName.value,
                department: formData.departmentName.value,
                attendance: formData.attendanceName.value,
                office: {
                    name: formData.officeName.value,
                    role: formData.roleName.value,
                    copiedManager: 'Mohamed Tarek',
                    joiningDate: formData.startDate.value,
                    manager: formData.directManagerName.value
                }
            }
            setEmployees((prevState) => [...prevState, employee])
        } else {
            setFormStatus(false)
        }
    }

    const onDeleteEmployee = (id) => {
        let confirmStatus = window.confirm('Are you sure you want to delete employee?')
        if (confirmStatus) {
            setEmployees(employees.filter((employee) => employee.id !== id))
        }
    }
    return (
        <div className="wrapper-page">
            {
                // Show only in case user click add new employee
                toggleFormModal && (
                    <FormModal
                        setFormData={setFormData}
                        formData={formData}
                        setToggleFormModal={setToggleFormModal}
                        toggleFormModal={toggleFormModal}
                        onSubmitData={onSubmitData}
                        employeeNameErr={formData.employeeName.errMsg}
                        startDateErr={formData.startDate.errMsg}
                        emailErr={formData.email.errMsg}
                        departmentErr={formData.departmentName.errMsg}
                        positionErr={formData.departmentName.errMsg}
                    />
                )
            }
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-1">
                        <Sidebar />
                    </div>
                    <div className="col">
                        <Header />

                        <div className="custom-container pt-4">
                            <div className="d-flex align-items-center">
                                <SearchList
                                    className="search-list-wrapper col-10"
                                    icon="fa-solid fa-magnifying-glass"
                                    placeholder="search"
                                    iconStyle="search-list-icon"
                                    setSearchValue={setSearchValue} />
                                <button className="btn btn-add" onClick={() => setToggleFormModal(true)}><i className="fa-solid fa-plus icon-add"></i> Add new</button>
                            </div>
                            <ListEmployee
                                employees={employees}
                                searchValue={searchValue}
                                popupDeleteToggle={popupDeleteToggle}
                                setPopupDeleteToggle={setPopupDeleteToggle}
                                onDeleteEmployee={onDeleteEmployee}

                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App