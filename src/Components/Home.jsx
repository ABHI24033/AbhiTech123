import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Home.css'
import SideImage from './Images/internet-service-250x250.png'
//import { NavLink } from 'react-router-dom';
import Common from'./Common'

export default function Home() {
    return (
        <>
           <Common
           head="Grow Your Business with"
            button="Get Started"
            Image={SideImage}
           />
        </>
    )
}
