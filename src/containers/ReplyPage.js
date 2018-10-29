import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRequestAction } from '../actions/requestActions';
//import ReplyForm from '../components/ReplyForm';

class ReplyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    // store change
    handleOnChange(input, value) {
        
        this.setState({[input]: value.target.value});
    }
    
    // handle search 
    handleAdd(event) {
        event.preventDefault();
        const { message } = this.state;
        console.log(this.state);
        if (message !== null) {            
            this.props.dispatch(addRequestAction(message, this.props.token));            
        }
    }
    render() {
        const { error, requestId } = this.props;
        return (
            <div className="container-fluid">
            
            </div>
        );
    }
}

ReplyPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requestId: PropTypes.number.isRequired,

};

//stat to props
const mapStateToProps = (state) => {
    
    return {
        token: state.auth.token,
        error: state.addrequest.error,
        requestId: state.addrequest.Id,
    }
};


export default connect(mapStateToProps)(ReplyPage);

