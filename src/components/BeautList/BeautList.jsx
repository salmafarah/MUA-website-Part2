import React from 'react';
import './BeautList.css'
import { Link } from 'react-router-dom';

function BeautList({beaut}) { 
  return (
  <div className="card mb-3 BeautList mx-auto">
    <div className="row no-gutters white">
      <div className="col-md-4 white">
        <img src="https://imgur.com/LfL6MHF.jpg" className="card-img" alt="..."/>
    </div>
        <div className="col-md-8 white">
          <div className="card-body white">
            <h3 className="card-title white">{beaut.name}</h3>
            <h5 className="card-text white">Service: {beaut.typeOfService} </h5>
            <h5 className="card-text white">Location: {beaut.location} </h5>
            <h5 className="card-text white">Price: ${beaut.price} </h5>
            <h5 className="card-text white">Description: {beaut.description} </h5>
            <h5 className="card-text white"><Link to="/homepage" className="text-muted white">Checkout Profile</Link></h5>
          </div>
      </div>
    </div>
  </div>

  );
}

export default BeautList;