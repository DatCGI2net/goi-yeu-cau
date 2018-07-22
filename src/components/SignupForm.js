import React from 'react';
import {Link} from 'react-router';
import { PropTypes } from 'prop-types';


class SignupForm extends React.Component {
    render() {
        const { onHandleSignup, onHandleOnChange, error } = this.props;
        return(
        <div className="center">
            <h1 className="lead">Signup</h1>
            {error?
            <p className="text text-danger">{error}</p>
            :null
            }
            <div className="form-group">
                <label>Username:</label>
                <input className="form-control" type="text" name="username" 
                onChange={onHandleOnChange.bind(this, 'username')} 
                />            
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" name="password1" 
                    onChange={onHandleOnChange.bind(this, 'password1')} 
                />            
            </div>
            <div className="form-group">
                <label>Password Re-type:</label>
                <input className="form-control" type="password" name="password2" 
                    onChange={onHandleOnChange.bind(this, 'password2')} 
                />            
            </div>
            
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" name="email" 
                onChange={onHandleOnChange.bind(this, 'email')} 
                />            
            </div>
            <div className="form-group">
                <label>First Name:</label>
                <input className="form-control" type="text" name="first_name" 
                onChange={onHandleOnChange.bind(this, 'first_name')} 
                />            
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input className="form-control" type="text" name="last_name" 
                onChange={onHandleOnChange.bind(this, 'last_name')} 
                />            
            </div>
            <div>
            <div className="form-group">
                <label></label>
                <button className="btn bt-lg btn-primary" onClick={onHandleSignup.bind(this)}>SignUp</button>            
            </div>
            <Link to="signup">
            <button className="btn bt-lg btn-info">Signin</button>
            </Link>
            </div>
            
        </div>
        );
    }
    

}

SignupForm.propTypes = {
    onHandleOnChange: PropTypes.func.isRequired,
    onHandleSignup: PropTypes.func.isRequired
};

export default SignupForm;

