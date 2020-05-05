import React, { Component } from 'react';
import BeauticianForm from '../../components/BeauticianForm/BeauticianForm';
import './BeauticianPage';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="BeauticianPage">
        <BeauticianForm {...this.props} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default SignupPage;