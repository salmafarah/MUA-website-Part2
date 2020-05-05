import React from 'react'; 
import {Link} from 'react-router-dom'; 
import "./LandingPage.css"

function LandingPage(){
    return(
    <div className="form-group LandingPage">
        <div className="col-sm-12 text-center">
            <p> 
            Get all of your essential care need meet with help from our professionals 
            </p>
         </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
            <Link to="/signup" className=''> <button>Get Started </button></Link> 
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