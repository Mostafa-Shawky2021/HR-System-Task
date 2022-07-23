import React, { useState, useEffect, useMemo } from 'react';
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
    const [toggleFormModal, setToggleFormModal] = useState(false)

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


    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        // Set pagewrapper dynamic 
        const sidebar = document.getElementById('sidebar').clientWidth;
        const pageWrapper = document.getElementById('page-wrapper').style.paddingLeft = `${sidebar + 20}px`
        setEmployees(employeeData)
    }, [])

    const onSubmitData = (event) => {
        event.preventDefault();

        // validation Form
        if (formData.employeeName.value.trim().length === 0) {

            setFormData((prevState) => {
                prevState.employeeName.errMsg = 'employee name is required'
                prevState.employeeName.validate = false;
                return { ...prevState }
            })
        } else {

            setFormData((prevState) => {
                prevState.employeeName.errMsg = ''
                prevState.employeeName.validate = true;
                return { ...prevState }
            })
        }

        if (formData.startDate.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.startDate.errMsg = 'date field is required'
                prevState.startDate.validate = false;
                return { ...prevState }
            })
        } else {
            setFormData((prevState) => {
                prevState.startDate.errMsg = ''
                prevState.startDate.validate = true;
                return { ...prevState }
            })
        }
        if (formData.email.value.search(emailRegex) === -1) {
            setFormData((prevState) => {
                prevState.email.errMsg = 'Email must be valid'
                prevState.email.validate = false;
                return { ...prevState }
            })
        } else {
            setFormData((prevState) => {
                prevState.email.errMsg = ''
                prevState.email.validate = true;
                return { ...prevState }
            })
        }
        if (formData.departmentName.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.departmentName.errMsg = 'Department is required'
                prevState.departmentName.validate = false;
                return { ...prevState }
            })
        } else {
            setFormData((prevState) => {
                prevState.departmentName.errMsg = ''
                prevState.departmentName.validate = true;
                return { ...prevState }
            })
        }

        if (formData.positionName.value.trim().length === 0) {
            setFormData((prevState) => {
                prevState.positionName.errMsg = 'Position is required'
                prevState.positionName.validate = false;
                return { ...prevState }
            })
        } else {
            setFormData((prevState) => {
                prevState.positionName.errMsg = ''
                prevState.positionName.validate = true;
                return { ...prevState }
            })
        }


        let formStatusIterate = Object.entries(formData).some(([key, value]) => {
            // false meaning there is error in inputs   
            return value.validate === false
        })

        if (!formStatusIterate) {
            console.log('good')
            // no problem with error form
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
            for (let key in formData) {
                employee[key] = formData[key].value = ''
                employee[key] = formData[key].errMsg = '';

            }
            setToggleFormModal(false)
            setEmployees((prevState) => [...prevState, employee])
        }

    }


    const onDeleteEmployee = (id) => {
        let confirmStatus = window.confirm('Are you sure you want to delete employee?')
        if (confirmStatus) {
            setEmployees(employees.filter((employee) => employee.id !== id))
        }
    }
    return (
        <>
            {
                // Show only in case user click add new employee
                toggleFormModal && (
                    <FormModal
                        setFormData={setFormData}
                        formData={formData}
                        setToggleFormModal={setToggleFormModal}
                        toggleFormModal={toggleFormModal}
                        onSubmitData={onSubmitData}
                    />
                )
            }
            <Sidebar />
            <Header />
            <div className="page-wrapper" id="page-wrapper">
                <div className="searh-add-wrapper">
                    <div className="d-flex">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <SearchList
                                    className="search-list-wrapper"
                                    icon="fa-solid fa-magnifying-glass"
                                    placeholder="search"
                                    iconStyle="search-list-icon"
                                    setSearchValue={setSearchValue} />
                                <button className="btn btn-add" onClick={() => setToggleFormModal(true)}><i className="fa-solid fa-plus icon-add"></i> Add new</button>
                            </div>
                            <ListEmployee
                                employees={employees}
                                searchValue={searchValue}
                                onDeleteEmployee={onDeleteEmployee}
                            />
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default App