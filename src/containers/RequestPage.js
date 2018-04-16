import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchAllRequestsAction, selectedRequestAction } from '../actions/requestActions';
import RequestListPage from '../components/RequestListPage';

class RequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectedRequest = this.handleSelectedRequest.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(fetchAllRequestsAction(null));
    }
    // handle selected
    handleSelectedRequest(selectedRequest) {
        this.props.dispatch(selectedRequestAction(selectedRequest));
    }
    // hnadle search 
    handleSearch(event) {
        event.preventDefault();
        if (this.query !== null) {
            this.props.dispatch(fetchAllRequestsAction(this.query.value));
            this.query.value = '';

        }
    }
    render() {
        const { requests, selectedRequest, token } = this.props;
        return (
            <div className="container=fluid">
            {requests && selectedRequest? <div>

            <input type="text" ref={ref => (this.query = ref)} />
            <input type="submit" className="btn btn-primary"
                onClick={this.handleSearch} />  

            {token?
                <div className="row">
                <div className="col-sm-12">
                <Link to="addrequest">
                <button className="btn btn-info">Add Request</button>
                </Link>
                </div>
                </div>
            :
            null
            }

            <div className="row">
            <RequestListPage requests={requests}
                selectedRequest={selectedRequest}
                onHandleSelectRequest={this.handleSelectedRequest} />
            </div> 
            </div>: 'loadding...'}

            
            </div>
        );
    }
}

RequestPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.array,
    selectedRequest: PropTypes.object,
};

//stat to props
const mapStateToProps = (state) => {
    //console.log('state in requestPage:', state);

    return {
        requests: state.requests[0],
        selectedRequest: state.requests.selectedRequest,
        token: state.auth.token,
    };
};

//connect


export default connect(mapStateToProps)(RequestPage);

