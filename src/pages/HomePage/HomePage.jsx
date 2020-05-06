import React from 'react'
import './Homepage.css'; 
import BeautList from '../../components/BeautList/BeautList'

const HomePage = (props) => {
    console.log(props.beauticians[0])
    return(
    <div>
        {props.beauticians.map(beaut => 
            <BeautList
             beaut={beaut}
             key={beaut._id}
             />
        )}
    </div>
    );
}; 

export default HomePage;