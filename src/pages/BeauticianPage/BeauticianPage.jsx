import React, { Component } from 'react';
import Lottie from '../../components/Lottie/Lottie2'


class BeauticianPage extends Component {
  state = {
    invalidForm: true, 
    formData:{ 
    name:'', 
    profileImage: '',
    location: '', 
    avlDateandTime: '', 
    typeOfService:'', 
    price: '', 
    description: '',
    clientImages: '', 
    },
  };

  formRef = React.createRef(); 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateBeaut(this.state.formData)
  }; 

  handleChange = (e) => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}; 
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  }

  render(){
    return (
      <>
      <div className="row BeauticianPage">
      <div className="col-sm-6">
        <div className=" rowcolor">
          <Lottie/> 
        </div>
      </div>
      <div className="col-lg-4">
            <h1>Become a Beautician</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={this.state.formData.name}
                    placeholder=''
                    onChange={this.handleChange}
                    required
                  />
                  <label>Location</label>
                  <input
                    className="form-control"
                    name="location"
                    value={this.state.formData.location}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Type of Service</label>
                  <input
                    className="form-control"
                    name="typeOfService"
                    value={this.state.formData.typeOfService}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                  <div className="form-group">
                  <label>Price</label>
                  <input
                    className="form-control"
                    name="price"
                    value={this.state.formData.price}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                  <div className="form-group">
                  <label>Description</label>
                  <input
                    className="form-control"
                    name="description"
                    placeholder='Tell your potential clients a little bit about yourself and your service'
                    value={this.state.formData.description}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  disabled={this.state.invalidForm}
                >
                  Submit 
                </button>
              </form>
          </div>
      </div>
  </>
    );
  }
}



export default BeauticianPage;