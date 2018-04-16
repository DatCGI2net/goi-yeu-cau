import React from 'react';
import PropTypes from 'prop-types';

class RequestListPage extends React.Component {

    render() {
        const { requests, selectedRequest, onHandleSelectRequest } = this.props;

        return (
            <div className="col-sm-12">
                <h2>Requests</h2>
                <div className="selected-request">
                    <div key={selectedRequest.id}>
                    <h4>{selectedRequest.message}</h4>
                    <span className="col-sm-6 text text-xs">{selectedRequest.created}</span>
                    <span className="col-sm-6">{selectedRequest.owner}</span>
                    { selectedRequest.results && selectedRequest.results.length > 0?
                        <ul className="list-group">
                            { selectedRequest.results.map((result, i) => (
                                <li key={result.id} className="list-group-item">
                                <div>{result.description}</div>
                                </li>
                            )) }
                        </ul>
                        : null
                    }
                    </div>
                </div>

                <div className="list-group">
                {requests.map((request, i) => (

                    <div className="list-group-item { request.id == selectedRequest.id? active: null}" key={request.id}
                    onClick={onHandleSelectRequest.bind(this, request)}
                    >
                    {request.message}
                    </div>
                ))}
                </div>

            </div>
        );
    }
}

RequestListPage.propTypes = {
    requests: PropTypes.array,
    selectedRequest: PropTypes.object,
    onHandleSelectRequest: PropTypes.func.isRequired
};

export default RequestListPage;