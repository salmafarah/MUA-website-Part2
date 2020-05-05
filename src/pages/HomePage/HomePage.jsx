import React from 'react'
import './Homepage.css'; 

const HomePage = (props) => {
    console.log(props)
    return (
    <div>
        <div className='wrapper'>
            <div className='wave'></div>
            <div className='wave2'></div>
            <div className='wave3'></div>
        </div>

    </div>
    );
}; 

export default HomePage;