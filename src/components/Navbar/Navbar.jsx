import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 


const Navbar = (props) => {
    console.log(props)
    console.log(props.user)
    let nav = props.user ? (
        <div className="navbar Navbar-light color shadow"> 
            <Link to="/homepage" className="navbar-brand">
              <img className="navbar-brand d-inline-block align-top" src="https://imgur.com/BB2fUgf.jpg" width="auto" height="60" alt=""/>
             </Link> 
                <ul className="navbar justify-content-end color">
                  <Link to="/beauticianform" className="Navbar-link"><button className="color"> Become a Beautician </button> </Link>
                 <Link to="/about" className="Navbar-link" > <button className="color"> About </button> </Link> 
                  <Link to="" className="Navbar-link" onClick={props.handleLogout}>  <button className="color">Log Out </button></Link>
                </ul>
        </div> 
        ):(
        <div className="navbar Navbar-light color shadow"> 
            <Link  to="" className="navbar-brand">
                <img className="navbar-brand d-inline-block align-top" src="https://imgur.com/BB2fUgf.jpg" width="auto" height="60" alt=""/>
             </Link> 
                <ul className="navbar justify-content-end color">
               <Link to="/login" className='Navbar-link'> <button className="color"> Log In</button></Link>
                <Link to="/signup" className='Navbar-link'> <button className="color"> Sign Up</button></Link> 
                <Link to="/about" className="Navbar-link" > <button className="color">  About </button></Link> 
                </ul>
        </div>
        ); 
    return <div className="Navbar color">{nav}</div>;
}; 

export default Navbar; 