import React from 'react';
import './About.css'; 
import Lottie from '../../components/Lottie/Lottie1'

const About = () => {
    return (
    <div >
        <div className="row About">
            <div className="col-sm-6">
                <div className=" rowcolor">
                <h2>Pink Waves was created to give beauticians and their clients a professional platform to communicate and conduct business.
                    We want to provide users with the opportunity to find quaility beauticians, and beauticians the resources to run a successful business.
                </h2>
                </div>
            </div>
                <div className="col-lg-4">
                    <div>
                    <div className="card-body textbox">
                    < Lottie/>
                </div>
            </div>
         </div>
    </div>
</div>

    );
}; 

export default About;