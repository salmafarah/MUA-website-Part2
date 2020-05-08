import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './image1.json'; 

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


const Animation = () => {
    return (
        <div>
        <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        /> 
        </div>
    )
}


export default Animation; 