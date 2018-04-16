import React from 'react';
import {Link} from 'react-router';
import { PropTypes } from 'prop-types';


class RequestForm extends React.Component {
    render() {
        const { onHandleAdd, onHandleOnChange, error, requestId } = this.props;
        return(
        <div className="center">
            <h1 className="lead">Add new request</h1>
            {requestId?
            <p className="text text-success">Your request has been added successfully!</p>
            :
            null
            }
            {error?
            <p className="text text-danger">{error}</p>
            :null
            }
            <div className="form-group">
                <label>Message:</label>
                <input className="form-control" type="text" name="message" 
                onChange={onHandleOnChange.bind(this, 'message')} 
                />            
            </div>
            
            <div className="form-group">
                <label></label>
                <button className="btn bt-lg btn-primary" onClick={onHandleAdd.bind(this)}>Add</button>            
            </div>
            <div>
            <Link to="requests">
            <button className="btn bt-lg btn-info">Back</button>
            </Link>
            </div>
            
        </div>
        );
    }
    

}

RequestForm.propTypes = {
    onHandleOnChange: PropTypes.func.isRequired,
    onHandleAdd: PropTypes.func.isRequired
};

export default RequestForm;

