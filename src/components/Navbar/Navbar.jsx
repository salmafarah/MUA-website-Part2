import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './Navbar.css'; 


const Navbar = (props) => {
    console.log(props)
    console.log(props.user)
    let nav = props.user ? 
        <div className="navbar Navbar-light color shadow"> 
            <Link to="/homepage" className="navbar-brand">
              <img className="navbar-brand color" src="https://imgur.com/BB2fUgf.jpg" width="auto" height="60" alt=""/>
             </Link> 
                <ul className="navbar color justify-content-right">
                <Link to="/about" className="Navbar-link" > <button className="color"> About </button> </Link> 
                  <Link to="/beauticianform" className="Navbar-link"><button className="color"> Become a Beautician </button> </Link>
                  <Link to="" className="Navbar-link" onClick={props.handleLogout}>  <button className="color">Log Out </button></Link>
                  <i className=" navbar justify-content-right fab fa-twitter-square color"></i>
                  <i className="navbar justify-content-right color fab fa-facebook-square"></i>
                  <i className=" navbar justify-content-right color fab fa-instagram-square" ></i>
                </ul>
        </div> 
        :
        <div className="navbar color Navbar-light shadow"> 
            <Link  to="" className="navbar-brand">
                <img className="navbar-brand color" src="https://imgur.com/BB2fUgf.jpg" width="auto" height="60" alt=""/>
             </Link> 
            <ul className="navbar color justify-content-end color">
            <Link to="/about" className="Navbar-link" > <button className="color">  About </button></Link> 
               <Link to="/login" className='Navbar-link'> <button className="color"> Log In</button></Link>
                <Link to="/signup" className='Navbar-link'> <button className="signbtn"> Sign Up</button></Link> 
                <i className=" navbar justify-content-right fab fa-twitter-square color"></i>
                  <i className="navbar justify-content-right color fab fa-facebook-square"></i>
                  <i className=" navbar justify-content-right color fab fa-instagram-square" ></i>
            </ul>
        </div>
       
    return <div className="Navbar">{nav}</div>;
}; 

export default Navbar; 