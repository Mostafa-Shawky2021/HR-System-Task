import React, { useState, useEffect,useRef } from 'react';
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
    const [editEmployee,setEditEmployee] = useState(null)
    const [toggleFormModal, setToggleFormModal] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [viewPort,setViewPort] = useState(0)

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

    
    useEffect(()=>{
        setViewPort(window.innerWidth)
        
        // if( closeSidebar ) {
        //     pageWrapper.current.style.width = `100%`    
        // } else {

        //     pageWrapper.current.style.width = `${viewPort  - 106}px`
        // }
        
      
       

    },[viewPort,closeSidebar])
    // reset errMsg When user Close form 
    const onCloseFormModel = (e)=> {
        e.preventDefault()
        for( let key in formData ) {
            setFormData((prevState)=>{
                return {
                    ...prevState,
                    [key]:{
                        ...prevState[key],
                        errMsg:''
                    }
                }
            })
        }
        setToggleFormModal(false)

    }

    const onSubmitData = (event) => {
        event.preventDefault();
        // validation Form
        if (formData.employeeName.value.trim().length === 0) {

            setFormData((prevState) => {
                return {
                    ...prevState,
                    employeeName: {
                        ...prevState.employeeName,
                        errMsg: 'employee name is required',
                        validate: false,
                    },
                }

            })
        } else {
            
            setFormData((prevState) => {
                return {
                    ...prevState,
                    employeeName: {
                        ...prevState.employeeName,
                        errMsg: '',
                        validate: true,
                    }
                }

            })
        }

        if (formData.startDate.value.trim().length === 0) {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    startDate: {
                        ...prevState.startDate,
                        errMsg: 'date field is required',
                        validate: false,
                    }
                }
            })
        } else {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    startDate: {
                        ...prevState.startDate,
                        errMsg: '',
                        validate: true,
                    }
                }
            })
        }
        if (formData.email.value.search(emailRegex) === -1) {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    email: {
                        ...prevState.email,
                        errMsg: 'Email must be valid',
                        validate: false,
                    }
                }
            })
        } else {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    email: {
                        ...prevState.email,
                        errMsg: '',
                        validate: true,
                    }
                }
            })
        }
        if (formData.departmentName.value.trim().length === 0) {

            setFormData((prevState) => {
                return {
                    ...prevState,
                    departmentName: {
                        ...prevState.departmentName,
                        errMsg: 'Department is required',
                        validate: false,
                    }
                }
            })
        } else {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    departmentName: {
                        ...prevState.departmentName,
                        errMsg: '',
                        validate: true,
                    }
                }
            })
        }

        if (formData.positionName.value.trim().length === 0) {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    positionName: {
                        ...prevState.positionName,
                        errMsg: 'Position is required',
                        validate: false,
                    }
                }
            })
        } else {
            setFormData((prevState) => {
                return {
                    ...prevState,
                    positionName: {
                        ...prevState.positionName,
                        errMsg: '',
                        validate: true,
                    }
                }
            })
        }

        let formStatusIterate = Object.entries(formData).some(([key, value]) => {
            // false meaning there is error in inputs
            return value.validate === false
        })
        console.log(formStatusIterate)
        if (!formStatusIterate) {
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
            employees.length ? setEmployees((prevState) => [...prevState, employee]) : setEmployees((prevState) => [employee])
        }

    }

    const onEditEmployee = (id) => {
        const employee = employees.find((employee)=> employee.id === id )
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
            <Sidebar employeesCount={employees.length}  setCloseSidebar={setCloseSidebar} closeSidebar={closeSidebar}/>
            <div ref={pageWrapper} className={`page-wrapper ${!closeSidebar && viewPort > 768 ? 'toggle-page' : ''}`}>
                <Header />
                <div className="page">
                    <div className="searh-add-wrapper">
                        <div className="d-flex">
                            <div className="col">
                                <div className="search">
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
                                    onEditEmployee={onEditEmployee}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App