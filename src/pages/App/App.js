import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'; 
import userService from '../../utils/userService';
import Homepage from '../HomePage/HomePage'; 


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
        <header className="header-footer"> Pink Waves</header>
        <Switch>
          <Route 
            exact path="/"
              render={() => (
                <Homepage
                handleLogout={this.handleLogout}
                user={this.state.user}
                /> 
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
            render={({history}) => (
              <About/>
            )}
          /> 
          <Route
            exact path="/login"
            render={({history}) => (
              <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>
            )}
          /> 
        </Switch>
      </div>
    ); 
  }
}








export default App;
