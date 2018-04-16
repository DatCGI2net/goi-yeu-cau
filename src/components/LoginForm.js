import React from 'react';
import {Link} from 'react-router';
import { PropTypes } from 'prop-types';


class LoginForm extends React.Component {
    render() {
        const { onHandleLogin, onHandleOnChange, error } = this.props;
        return(
        <div className="center">
            <h1 className="lead">Đăng Nhập</h1>
            {error?
            <p className="text text-danger">{error}</p>
            :null
            }
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" name="email" 
                onChange={onHandleOnChange.bind(this, 'email')} 
                />            
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" name="password" 
                    onChange={onHandleOnChange.bind(this, 'password')} 
                />            
            </div>
            <div className="form-group">
                <label></label>
                <button className="btn bt-lg btn-primary" onClick={onHandleLogin.bind(this)}>SignIn</button>            
            </div>
            <div>
            <Link to="signup">
            <button className="btn bt-lg btn-info">Signup</button>
            </Link>
            </div>
            
        </div>
        );
    }
    

}

LoginForm.propTypes = {
    onHandleOnChange: PropTypes.func.isRequired,
    onHandleLogin: PropTypes.func.isRequired
};

export default LoginForm;

