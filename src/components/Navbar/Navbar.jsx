import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = (props) => {
    console.log(props)
    console.log(props.user)
    let nav = props.user ? (
        <div> 
            <Link to="/" className="Navbar-link" onClick={props.handleLogout}> Home </Link> 
            <Link to="/about" className="Navbar-link" onClick={props.handleLogout}> About </Link> 
            <Link to="/beauticianform" className="Navbar-link" onClick={props.handleLogout}> Become a Beautician </Link> 
            <Link to="" className="Navbar-link" onClick={props.handleLogout}> Log Out </Link> 
        </div> 
        ):(
        <div className="Navbar">
            <Link to="/login" className='Navbar-link'>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className='Navbar-link'>Sign Up</Link>
            <Link to="" className="Navbar-link" onClick={props.handleLogout}> About </Link> 
        </div>
        ); 
    return <div className="Navbar">{nav}</div>;
}; 

export default Navbar; 