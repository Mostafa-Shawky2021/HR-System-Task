import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/header/Header'
const App = () => {
    return (
        <div className="wrapper-page">
            <div className="container-fluid">
                <div className="row  g-0">
                    <div className="col-1">
                        hello
                    </div>
                    <div className="col">
                        <Header />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App