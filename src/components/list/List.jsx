import React, { useState, useEffect } from 'react'
import EmployeeCard from '../card/Card'
import PopupDelete from '../popup/Popup'
import './list.css'
const List = ({
    employees,
    searchValue,
    onDeleteEmployee }) => {

    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        if (searchValue.length > 0) {
            let filter = employees.filter((employee) => employee.name.toLowerCase().includes(searchValue))
            setFilterData(filter)
        } else {
            setFilterData(employees)
        }
    }, [searchValue, employees])


    return (
        <div className="wrapper-list">
            <div className="row g-0">
                {
                    filterData.length ? (
                        filterData.map((employee, index) => (
                            <>
                                <div className="col-4" key={index}>
                                    <EmployeeCard
                                        id={employee.id}
                                        name={employee.name}
                                        position={employee.position}
                                        department={employee.department}
                                        attendance={employee.attendance}
                                        officeName={employee.office.name}
                                        officeRole={employee.office.role}
                                        officeCopiedManager={employee.office.copiedManager}
                                        officeJoiningDate={employee.office.joiningDate}
                                        officeManager={employee.office.manager}
                                        onDeleteEmployee={onDeleteEmployee}
                                    />

                                </div>
                            </>
                        ))

                    ) : (
                        <p>Sorry no employee to show</p>
                    )
                }

            </div>


        </div>
    )
}

export default List