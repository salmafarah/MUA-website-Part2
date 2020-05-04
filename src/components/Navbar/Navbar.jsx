import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = (props) => {
    console.log(props)
    console.log(props.user)
    let nav = props.user ? (
        <div> 
            <Link to="" className="Navbar-link"> Home </Link> 
            <Link to="/beauticianform" className="Navbar-link"> Become a Beautician </Link> 
            <Link to="/about" className="Navbar-link" > About </Link> 
            <Link to="" className="Navbar-link" onClick={props.handleLogout}> Log Out </Link> 
        </div> 
        ):(
        <div className="Navbar">
            <Link to="/login" className='Navbar-link'>Log In</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className='Navbar-link'>Sign Up</Link>
            <Link to="/about" className="Navbar-link" > About </Link> 
        </div>
        ); 
    return <div className="Navbar">{nav}</div>;
}; 

export default Navbar; 