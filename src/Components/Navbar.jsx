import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { NavLink} from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            {/*<div className="container-fluid ">*/}
                <div className="row nav_bg ">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <p className="navbar-brand" >AbhiTech</p>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink  activeclassname="active_class" className="nav-link active_class" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeclassname="active_class" className="nav-link active_class" to="/about/">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeclassname="active_class" className="nav-link active_class" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeclassname="active_class" className="nav-link active_class" to="contact">Contact</NavLink>
                                        </li>
                                       
                                    </ul>
                                   
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            {/*</div>*/}
        </>
    )
}
