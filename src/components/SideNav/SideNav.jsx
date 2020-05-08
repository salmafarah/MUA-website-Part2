import React from 'react'; 
import './SideNav.css'; 
import { Link } from 'react-router-dom';

function SideNav() { 
    return (
        <div className="sidenav">
            <Link to='/profile'>My Profile</Link>
            <a href="#appointment">My Appointments</a>
            <a href="#clients">My Clients</a>
            <a href="#contact">Contact Us</a>
        </div>
    )
}



export default SideNav;