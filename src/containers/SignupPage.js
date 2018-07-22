import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupAction } from '../actions/authAction';
import SignupForm from '../components/SignupForm';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password1: '', password2:'' };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    // store change
    handleOnChange(input, value) {
        console.log(input, value.target.value);
        this.setState({[input]: value.target.value});
    }
    
    // handle singup 
    handleSignup(event) {
        event.preventDefault();
        console.log(this.state);
        const { username, email, password1, password2, first_name, last_name } = this.state;        
        if (username !== null && password1 !== null && password2 !== null && password1 === password2) {
            this.props.dispatch(signupAction({email:email, password1:password1,
                 password2:password2, username:username, first_name:first_name,
                  last_name:last_name}));            
        }
    }
    render() {
        
        return (
            <div className="container-fluid">
            <SignupForm onHandleSignup={this.handleSignup} 
            onHandleOnChange={this.handleOnChange} 
            error={this.props.error}
            />
            </div>
        );
    }
}


//stat to props
const mapStateToProps = (state) => {
    //console.log('state:', state);
    return {
        token: state.auth.token,
        error: state.auth.error
    }
};


export default connect(mapStateToProps)(SignupPage);

