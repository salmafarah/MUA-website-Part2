import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = (props) => {
    console.log(props)
    console.log(props.user)
    let nav = props.user ? (
        <div className="navbar Navbar-light"> 
            <Link to="" className="navbar-brand">
                <img className="navbar-brand" src="https://imgur.com/cua3sGJ.jpg" width="auto" height="60" className="d-inline-block align-top" alt=""/>
             </Link> 
                <ul className="navbar justify-content-end">
                    <Link to="/beauticianform" className="Navbar-link"> Become a Beautician </Link> 
                    <Link to="/about" className="Navbar-link" > About </Link> 
                    <Link to="" className="Navbar-link" onClick={props.handleLogout}> Log Out </Link> 
                </ul>
        </div> 
        ):(
        <div className="navbar Navbar-light"> 
            <Link  to="" className="navbar-brand">
                <img className="navbar-brand" src="https://imgur.com/cua3sGJ.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
             </Link> 
                <ul className="navbar justify-content-end">
                    <Link to="/login" className='Navbar-link'>Log In</Link>
                    <Link to="/signup" className='Navbar-link'>Sign Up</Link>
                    <Link to="/about" className="Navbar-link" > About </Link> 
                </ul>
        </div>
        ); 
    return <div className="Navbar">{nav}</div>;
}; 

export default Navbar; 