import React from 'react';
import PropTypes from 'prop-types';

class RequestItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        
    }
    toggleClass(request) {
        
        this.props.onHandleSelectRequest(request);
    }
    render() {
        const {request, selectedRequest } = this.props;
        return (
            <div className={"list-group-item" + (request.id === selectedRequest.id? ' active': '') } key={request.id}
            onClick={this.toggleClass.bind(this, request)}
            >
            {request.message}
            </div>
        );
    }
}
RequestItem.propTypes = {
    requests: PropTypes.object,
    selectedRequest: PropTypes.object,
    onHandleSelectRequest: PropTypes.func.isRequired
};

export default RequestItem;