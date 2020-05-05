import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'; 
import userService from '../../utils/userService';
import Navbar from '../../components/Navbar/Navbar'; 
import Homepage from '../HomePage/HomePage'; 
import About from '../About/About';
import BeauticianPage from '../BeauticianPage/BeauticianPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
    };
  }

/*--- Callback Methods ---*/

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
};

handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser()});
};

/*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <Navbar
        handleLogout={this.handleLogout}
        user={this.state.user}
         />
        <Switch>
          <Route 
            exact path="/"
              render={() => (
                <Homepage/> 
              )}
                /> 
          <Route
            exact path="/signup"
            render={({history}) => (
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>
            )}
          /> 
          <Route
            exact path="/login"
            render={({history}) => (
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>
            )}
          /> 
          <Route
            exact path="/about"
            render={() => (
              <About/>
            )}
          /> 
          <Route
            exact path="/beauticianform"
            render={() => (
              <BeauticianPage/>
            )}
          />
        </Switch> 
        <footer className='footer'> Footer </footer>
      </div>
    ); 
  }
}




export default App;
