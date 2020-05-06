import React from 'react'; 
import {Link} from 'react-router-dom'; 
import "./LandingPage.css"

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
                <div>
                <div className="card-body textbox">
                    <p className="card-text text">Get all of your essential care needs meet with help from our professionals</p>
                    <Link to="/signup" className="text"> <button>Get Started </button></Link> 
                </div>
            </div>
         </div>
        </div>
         <div className='wrapper'>
             <div className='wave'></div>
             <div className='wave2'></div>
             <div className='wave3'></div>
        </div>
    </div>

    )

}


export default LandingPage; 