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
    const [officeName, setOfficeName] = useState('')
    const [departmentName, setDepartmentName] = useState('')
    const [attendanceName, setAttendanceName] = useState('')
    const [roleName, setRoleName] = useState('')
    const [positionName, setPositionName] = useState('')
    const [directManagerName, setDirectManagerName] = useState('')
    const [toggleFormModal, setToggleFormModal] = useState(false)
    useEffect(() => {
        setEmployees(employeeData)
    }, [])


    return (
        <div className="wrapper-page">
            {
                toggleFormModal && (
                    <FormModal
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