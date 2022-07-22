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
    const [employeeName, setEmployeeName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [email, setEmail] = useState('');
    const [officeName, setOfficeName] = useState('')
    const [departmentName, setDepartmentName] = useState('')
    const [attendanceName, setAttendanceName] = useState('')
    const [roleName, setRoleName] = useState('')
    const [positionName, setPositionName] = useState('')
    const [directManagerName, setDirectManagerName] = useState('')
    const [toggleFormModal, setToggleFormModal] = useState(true)

    // errorMessage
    const [employeeNameErr, setEmployeeNameErr] = useState('')
    const [startDateErr, setStartDateErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [departmentErr, setDepartmentErr] = useState('')
    const [positionErr, setPositionErr] = useState('')

    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    useEffect(() => {
        setEmployees(employeeData)
    }, [])

    const onSubmitData = (event) => {

        event.preventDefault();

        if (employeeName.trim().length === 0) {
            setEmployeeNameErr('Sorry Employee name is required')
        }

        if (startDate.trim().length === 0) {
            setStartDateErr('Sorry date is required')
        }

        // if (!emailRegex.test(email)) {
        //     setEmailErr('sorry Email is required and must be valid')
        // }
        if (departmentName.trim().length === 0) {
            setDepartmentErr('Sorry deprtment is required')
        }
        if (positionName.trim().length === 0) {
            setPositionErr('Sorry position is required')
        }

        if (employeeNameErr || startDateErr || emailErr || departmentErr || positionErr) {
            return
        } else {
            setEmployeeNameErr('')
            setStartDateErr('')
            setDepartmentErr('')
            setPositionErr('')

        }



        let data = {
            id: employees.length,
            name: employeeName,
            position: positionName,
            department: departmentName,
            attendance: attendanceName,
            office: {
                name: officeName,
                role: roleName,
                copiedManager: 'Mohamed Tarek',
                joiningDate: startDateErr,
                manager: directManagerName
            }
        }
        setEmployees((prevState) => [...prevState, data])

        console.log(employees)



    }

    return (
        <div className="wrapper-page">
            {
                toggleFormModal && (
                    <FormModal
                        setEmployeeName={setEmployeeName}
                        setStartDate={setStartDate}
                        setEmail={setEmail}
                        setOfficeName={setOfficeName}
                        officeName={officeName}
                        departmentName={departmentName}
                        setDepartmentName={setDepartmentName}
                        attendanceName={attendanceName}
                        setAttendanceName={setAttendanceName}
                        setRoleName={setRoleName}
                        roleName={roleName}
                        setPositionName={setPositionName}
                        positionName={positionName}
                        setDirectManagerName={setDirectManagerName}
                        directManagerName={directManagerName}
                        setToggleFormModal={setToggleFormModal}
                        toggleFormModal={toggleFormModal}
                        onSubmitData={onSubmitData}
                        employeeNameErr={employeeNameErr}
                        startDateErr={startDateErr}
                        emailErr={emailErr}
                        departmentErr={departmentErr}
                        positionErr={positionErr}

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
                                    iconStyle="search-list-icon" />
                                <button className="btn btn-add" onClick={() => setToggleFormModal(true)}><i className="fa-solid fa-plus icon-add"></i> Add new</button>
                            </div>
                            <ListEmployee employees={employees} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App