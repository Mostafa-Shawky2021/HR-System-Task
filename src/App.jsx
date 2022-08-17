import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
    const [toggleFormModal, setToggleFormModal] = useState(false)
    const [closeSidebar, setCloseSidebar] = useState(false)
    const [viewPort, setViewPort] = useState(window.innerWidth)
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

    // reset errMsg When user Close form 
    const onCloseFormModel = (e) => {
        e.preventDefault()
        setToggleFormModal(false)
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
                        setToggleFormModal={setToggleFormModal}
                        toggleFormModal={toggleFormModal}
                        onCloseFormModel={onCloseFormModel}
                        setEmployees={setEmployees}
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
                    />
                </div>
            </div>
        </>
    )
}

export default App