import React, { Component } from 'react'
import './Homepage.css'; 
import BeautList from '../../components/BeautList/BeautList'
import SideNav from '../../components/SideNav/SideNav'
import userService from '../../utils/userService'

class HomePage extends Component {
  async componentDidMount() {
    const beauticians = await userService.index(); 
    this.props.handlegetBeaut(beauticians);
  }

  render() {
   return(
    <div>
      <form>
        <div className="form-box">
          <input type="text" className="search location" placeholder="Location"/>
          <input type="text" className="search service" placeholder="Type Of Service"/>
          <button className="search-btn" type="button">Search </button>
        </div>
      </form>
        {this.props.beauticians.map(beaut => 
            <BeautList
             beaut={beaut}
             key={beaut._id}
             />
        )}
        <SideNav/>
    </div>
    );
}; 
}

export default HomePage;