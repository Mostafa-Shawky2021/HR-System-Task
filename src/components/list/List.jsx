import React from 'react'
import EmployeeCard from '../card/Card'
import './list.css'
const List = ({ employees }) => {
    console.log(employees)
    return (
        <div className="wrapper-list">
            <div className="row g-0">
                {
                    employees.length ? (
                        employees.map((employee) => (

                            <div className="col-4" key={employee.id}>
                                <EmployeeCard
                                    name={employee.name}
                                    position={employee.position}
                                    department={employee.department}
                                    attendance={employee.attendance}
                                    officeName={employee.office.name}
                                    officeRole={employee.office.role}
                                    officeCopiedManager={employee.office.copiedManager}
                                    officeJoiningDate={employee.office.joiningDate}
                                    officeManager={employee.office.manager}

                                />

                            </div>
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