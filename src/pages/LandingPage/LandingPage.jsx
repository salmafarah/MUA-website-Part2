import React from 'react'; 
import {Link} from 'react-router-dom'; 
import "./LandingPage.css"
import Waves from '../../components/Waves/Waves'

function LandingPage(){
    return(
    <div className="">
        <div className="row LandingPage">
            <div className="col-sm-6">
                <div className=" rowcolor">
                <img className="image"src="https://imgur.com/qptqOC4.jpg" alt=""/>
                </div>
            </div>
                <div className="col-lg-4">
                    <div className="LandingText">
                        <p>Get all of your essential beauty care needs met with help from our professionals</p>
                        <Link to="/signup"> <button className="LandingPage-btn">Get Started </button></Link>
                    </div>
                </div>
            </div>
                <Waves/>
        </div>
      )
}


export default LandingPage; 