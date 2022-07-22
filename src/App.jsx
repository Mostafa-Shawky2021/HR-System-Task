import React from 'react';
import "./index.css"
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import SearchList from './components/search/Search'
const App = () => {

    return (
        <div className="wrapper-page">
            <div className="container-fluid">
                <div className="row  g-0">
                    <div className="col-1">
                        <Sidebar />
                    </div>
                    <div className="col">
                        <Header />
                        <div className="container pt-4">
                            <div className="d-flex align-items-center">
                                <SearchList
                                    className="search-list-wrapper col-10"
                                    icon="fa-solid fa-magnifying-glass"
                                    placeholder="search"
                                    iconStyle="search-list-icon" />
                                <button className="btn btn-add"><i class="fa-solid fa-plus icon-add"></i> Add new</button>
                            </div>

                            <div className="row">
                                <div className="col">asdsad</div>
                                <div className="col">asdsad</div>
                                <div className="col">asdsad</div>
                                <div className="col">asdsad</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App