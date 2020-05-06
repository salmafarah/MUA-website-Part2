import React from 'react';

function BeautList({beaut}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{beaut.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Location</dt>
          <dd>{beaut.location}</dd>
          <dt>Service</dt>
          <dd>{beaut.typeOfService}</dd>
          <dt>Price</dt>
          <dd>{beaut.price}</dd>
          <dt>Service</dt>
          <dd>{beaut.typeOfService}</dd>
          <dt>Description</dt>
          <dd>{beaut.description}</dd>
        </dl>
      </div>
    </div>
  );
}

export default BeautList;