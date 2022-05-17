import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Home.css'
import SideImage from './Images/SideImage.jpg'
import { NavLink } from 'react-router-dom';

export default function Common(props) {
    return (
        <>
            <section className='d-flex align-item-center'></section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row pt-3">
                            <div className="col-6 pt-5 pt-lg-0 order-0 order-lg-1 heading">
                                <h1>{props.head}<b className='b'>AbhiTech</b></h1>
                                <h4 className='my-5'>We are the team of talanted developers ,We can make an effective website</h4>
                                <div className='my-2'>
                                    <NavLink type="button" to="/about" className="btn btn-outline-info">{props.button}</NavLink>
                                </div>
                            </div>
                            <div className="col-5 order-1 ps-5 align-self-end">
                                <img src={props.Image} className='img-fluid animated' alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
