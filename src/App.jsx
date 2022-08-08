import React, { useState, useEffect, useRef } from 'react';
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
    const [editEmployee, setEditEmployee] = useState(null)
    const [toggleFormModal, setToggleFormModal] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [viewPort, setViewPort] = useState(window.innerWidth)
    const [formStatus,setFormStatus] = useState(false)
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
    const pageWrapper = useRef(null)
    useEffect(() => {
        setEmployees(employeeData)
    }, [])

    useEffect(() => {
        const togglePage = () => {
            setViewPort(window.innerWidth)
            if (closeSidebar || viewPort < 576) {
                pageWrapper.current.style.width = '100%';
            } else {
                pageWrapper.current.style.width = `${(document.body.clientWidth - 106)}px`
            }
        }
        togglePage()
        window.addEventListener('resize', togglePage)
        return () => {
            window.removeEventListener('resize', togglePage)
        }
    }, [closeSidebar, viewPort])


    useEffect(()=> {
        
        let formStatusIterate = Object.entries(formData).some(([key, value]) => {
            // False meaning there is error in input
            return value.validate === false
        })
    
        if (!formStatusIterate) {
            let employee = {
                id: employees.length + 1,
                name: formData.employeeName.value,
                position: formData.positionName.value,
                department: formData.departmentName.value,
                attendance: formData.attendanceName.value,
                email: formData.email.value,
                office: {
                    name: formData.officeName.value,
                    role: formData.roleName.value,
                    copiedManager: 'Mohamed Tarek',
                    joiningDate: formData.startDate.value,
                    manager: formData.directManagerName.value
                }
            }

            for (let key in formData) {
                setFormData((prevState) => {
                    return {
                        ...prevState,
                        [key]: {
                            ...prevState[key],
                            value: '',
                            errMsg: ''
                        }
                    }
                })

                if (key !== "officeName" && key !== "attendanceName" && key !== "roleName" && key !== "directManagerName") {
                    setFormData((prevState) => {
                        return {
                            ...prevState,
                            [key]: {
                                ...prevState[key],
                                validate: false
                            }
                        }
                    })

                }

            }
            setToggleFormModal(false)
            setEmployees((prevState) => [...prevState, employee])
        }
    },[formData])

    const onCloseFormModel = (e) => {
        e.preventDefault()
        for (let key in formData) {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    [key]: {
                        ...prevState[key],
                        errMsg: ''
                    }
                }
            })
        }
        setToggleFormModal(false)
        setEditEmployee(null)
    }

    const onSubmitData = (event) => {

        event.preventDefault();
        // validation Form
        if (formData.employeeName.value.trim().length === 0) {
            formData.employeeName.errMsg = 'employee name is required'
            formData.employeeName.validate = false
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         employeeName: {
            //             ...prevState.employeeName,
            //             errMsg: 'employee name is required',
            //             validate: false,
            //         },
            //     }

            // })

        } else {
            formData.employeeName.errMsg = ''
            formData.employeeName.validate = true 
            console.log(formData)
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         employeeName: {
            //             ...prevState.employeeName,
            //             errMsg: '',
            //             validate: true,
            //         }
            //     }

            // })

        }

        if (formData.startDate.value.trim().length === 0) {
            formData.startDate.errMsg = 'date field is required'
            formData.startDate.validate = false
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         startDate: {
            //             ...prevState.startDate,
            //             errMsg: 'date field is required',
            //             validate: false,
            //         }
            //     }
            // })
        } else {
            formData.startDate.errMsg = ''
            formData.startDate.validate = true
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         startDate: {
            //             ...prevState.startDate,
            //             errMsg: '',
            //             validate: true,
            //         }
            //     }
            // })
        }
        if (formData.email.value.search(emailRegex) === -1) {
            formData.email.errMsg = 'Email must be valid'
            formData.email.validate = false
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         email: {
            //             ...prevState.email,
            //             errMsg: 'Email must be valid',
            //             validate: false,
            //         }
            //     }
            // })
        } else {
            formData.email.errMsg = ''
            formData.email.validate = true
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         email: {
            //             ...prevState.email,
            //             errMsg: '',
            //             validate: true,
            //         }
            //     }
            // })
        }

        if (formData.departmentName.value.trim().length === 0) {
            formData.departmentName.errMsg = 'Department is required'
            formData.departmentName.validate = false
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         departmentName: {
            //             ...prevState.departmentName,
            //             errMsg: 'Department is required',
            //             validate: false,
            //         }
            //     }
            // })
        } else {
            formData.departmentName.errMsg = ''
            formData.departmentName.validate = true
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         departmentName: {
            //             ...prevState.departmentName,
            //             errMsg: '',
            //             validate: true,
            //         }
            //     }
            // })
        }

        if (formData.positionName.value.trim().length === 0) {
            formData.positionName.errMsg = 'Position is required'
            formData.positionName.validate = false
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         positionName: {
            //             ...prevState.positionName,
            //             errMsg: 'Position is required',
            //             validate: false,
            //         }
            //     }
            // })
        } else {
            formData.positionName.errMsg = ''
            formData.positionName.validate = true
            // setFormData((prevState) => {
            //     return {
            //         ...prevState,
            //         positionName: {
            //             ...prevState.positionName,
            //             errMsg: '',
            //             validate: true,
            //         }
            //     }
            // })
        }  
        
        let formStatusIterate = Object.entries(formData).some(([key, value]) => {
            // False meaning there is error in input
            return value.validate === false
        })
        console.log(formStatusIterate)
        if( formStatusIterate ) {
            setFormStatus(false)
        } else {
            setFormStatus(true)
        }
    
        if (formStatus) {
            let employee = {
                id: employees.length + 1,
                name: formData.employeeName.value,
                position: formData.positionName.value,
                department: formData.departmentName.value,
                attendance: formData.attendanceName.value,
                email: formData.email.value,
                office: {
                    name: formData.officeName.value,
                    role: formData.roleName.value,
                    copiedManager: 'Mohamed Tarek',
                    joiningDate: formData.startDate.value,
                    manager: formData.directManagerName.value
                }
            }

            for (let key in formData) {
                setFormData((prevState) => {
                    return {
                        ...prevState,
                        [key]: {
                            ...prevState[key],
                            value: '',
                            errMsg: ''
                        }
                    }
                })

                if (key !== "officeName" && key !== "attendanceName" && key !== "roleName" && key !== "directManagerName") {
                    setFormData((prevState) => {
                        return {
                            ...prevState,
                            [key]: {
                                ...prevState[key],
                                validate: false
                            }
                        }
                    })

                }

            }

            setToggleFormModal(false)
            setEmployees((prevState) => [...prevState, employee])
            setFormStatus(false)
    }

    }
    const onEditEmployee = (id) => {
        const employee = employees.find((employee) => employee.id === id)
        setEditEmployee(employee)
        setToggleFormModal(true)

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
                        onCloseFormModel={onCloseFormModel}
                        editEmployee={editEmployee}
                    />
                )
            }
            <Sidebar employeesCount={employees.length} setCloseSidebar={setCloseSidebar} closeSidebar={closeSidebar} />
            <div ref={pageWrapper} className={`page-wrapper ${!closeSidebar && viewPort > 576 ? 'toggle-page' : ''}`}>
                <Header />
                <div className="page">
                    <div className="searh-add-wrapper">
                        <div className="search">
                            <SearchList
                                className="search-list-wrapper"
                                icon="fa-solid fa-magnifying-glass"
                                placeholder="search"
                                iconStyle="search-list-icon"
                                setSearchValue={setSearchValue} />
                            <button className="btn btn-add" onClick={() => setToggleFormModal(true)}><i className="fa-solid fa-plus icon-add"></i> Add new</button>
                        </div>
                    </div>
                    <ListEmployee
                        employees={employees}
                        searchValue={searchValue}
                        onDeleteEmployee={onDeleteEmployee}
                        onEditEmployee={onEditEmployee}
                    />
                </div>
            </div>
        </>
    )
}

export default App