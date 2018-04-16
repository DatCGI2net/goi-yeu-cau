import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import fetchRequests from '../Api/request';
import { loginAction } from '../actions/authAction';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    // store change
    handleOnChange(input, value) {
        console.log(input, value.target.value);
        this.setState({[input]: value.target.value});
    }
    
    // handle search 
    handleLogin(event) {
        event.preventDefault();
        const { email, password } = this.state;
        console.log(this.state);
        if (email !== null && password !== null) {
            this.props.dispatch(loginAction(email, password));            
        }
    }
    render() {
        
        return (
            <div className="container-fluid">
            <LoginForm onHandleLogin={this.handleLogin} 
            onHandleOnChange={this.handleOnChange} 
            error={this.props.error}
            />
            </div>
        );
    }
}

LoginPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

//stat to props
const mapStateToProps = (state) => {
    //console.log('state:', state);
    return {
        token: state.auth.token,
        error: state.auth.error
    }
};


export default connect(mapStateToProps)(LoginPage);

