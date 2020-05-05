import React, {Component} from 'react'; 
import { Link } from 'react-router-dom'; 
import './LoginPage.css'; 
import userService from '../../utils/userService';

class LoginPage extends Component {

    state = {
        email: '', 
        password: '', 
    }; 


handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value 
    })
}

handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/homepage');

    } catch (err){
        alert ('Invalid Credentials')
    }
}; 

render() {
    return (
            <div className="LoginPage"> 
                <header className="header-footer"> Log In</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange}/> 
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/> 
                    </div>
                    <div className="form-group">
                        <button className="btn"> Log In</button>
                        <Link to='/'> Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
} 

export default LoginPage;