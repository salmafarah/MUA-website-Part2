import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'; 
import userService from '../../utils/userService';
import Navbar from '../../components/Navbar/Navbar'; 
import Homepage from '../HomePage/HomePage'; 
import About from '../About/About';
import BeauticianPage from '../BeauticianPage/BeauticianPage';
import LandingPage from '../LandingPage/LandingPage'




class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(), 
      beauticians: [], 
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

handleUpdateBeaut = async updateBeautData => {
  const updateBeaut = await userService.createBeaut(updateBeautData);
  const updateUser = this.state.user._id === updateBeaut._id ? updateBeaut : this.state.user
  this.setState(
    { user: updateUser},
  () => this.props.history.push('/homepage'));
}


/*--- Lifecycle Methods ---*/
async componentDidMount(){
  const NewBeaut = await userService.index(); 
  this.setState(state =>({
    beauticians: NewBeaut
  }),
  () => this.props.history.push('/homepage'))
}

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
                <LandingPage /> 
              )}
                /> 
          <Route
            exact path="/homepage"
            render={() => (
              <Homepage
              beauticians={this.state.beauticians}
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
            render={() => (
              <About/>
            )}
          /> 
          <Route
            exact path="/beauticianform"
            render={() => (
              <BeauticianPage
              handleUpdateBeaut={this.handleUpdateBeaut}
              />
            )}
          />
        </Switch> 
        <footer className='footer'> Created by Salma Farah </footer>
      </div>
    ); 
  }
}




export default App;
