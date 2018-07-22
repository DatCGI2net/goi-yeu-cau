import React from 'react';
import { PropTypes } from 'prop-types';


class ResultForm extends React.Component {
    render() {
        const { onHandleReply, onHandleReplyChange, error, resultId, onHandleBack } = this.props;
        return(
        <div className="center">
            <h1 className="lead">Add new repy</h1>
            {resultId?
            <p className="text text-success">Your reply has been added successfully!</p>
            :
            null
            }
            {error?
            <p className="text text-danger">{error}</p>
            :null
            }
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" type="text" name="name" 
                onChange={onHandleReplyChange.bind(this, 'name')}
                />            
            </div>
            <div className="form-group">
                <label>Description:</label>
                <input className="form-control" type="text" name="description" 
                
                />            
            </div>
            <div className="form-group">
                <label>Contact Info:</label>
                <input className="form-control" type="text" name="contact_info" 
                
                />            
            </div>
            
            <div className="form-group">
                <label></label>
                <button className="btn bt-lg btn-primary" onClick={onHandleReply.bind(this)}>Reply</button>            
            </div>
            <div>
            
            <button onClick={onHandleBack} className="btn bt-lg btn-info">Back</button>
            
            </div>
            
        </div>
        );
    }
    

}

ResultForm.propTypes = {
    onHandleReplyChange: PropTypes.func.isRequired,
    onHandleReply: PropTypes.func.isRequired,
    onHandleBack: PropTypes.func.isRequired,
    
};

export default ResultForm;

