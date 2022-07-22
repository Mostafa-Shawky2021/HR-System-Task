import React from 'react';
import './formModal.css'
const FormModal = () => {
    return (
        <div className='custom-modal'>
            <form className="form-modal">
                {/* employee info */}
                <div className="emp-info">
                    <h3 className="title">new employee</h3>
                    <p className="person-info-title">Personal Info</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="img"></div>
                        </div>
                        <div className="col-8 row">
                            <div className="mb-3 col-6">

                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label" htmlFor="name">Start Date</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" type="date" />
                                </div>
                            </div>

                            <div className="mb-3 col-6">

                                <label className="form-label" htmlFor="name">Phone</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label" htmlFor="name">Email</label>
                                <div className="col-12" >
                                    <input className="form-control" id="name" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  end emp info */}
                </div>
                {/* office info */}
                <div className="office-info">
                    <p className="office-info-title">Office Info</p>
                    <div className="form-group">
                        <label className="form-label">

                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default FormModal