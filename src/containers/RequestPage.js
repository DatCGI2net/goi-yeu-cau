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
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleReply = this.handleReply.bind(this);
        this.handleReplyChange = this.handleReplyChange(this);
        this.state = {
            limit: null,
            offset: null,
            query: null
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchAllRequestsAction(null));
    }
    handleReply() {
        console.log('handle Reply');
    }
    handleReplyChange() {
        console.log('handleReplyOnChange');
    }

    // handle selected
    handleSelectedRequest(selectedRequest) {
        this.props.dispatch(selectedRequestAction(selectedRequest));
    }
    // hnadle search 
    handleSearch(event) {
        event.preventDefault();
        if (this.query !== null) {
            this.setState({query: this.query.value}, function(){
                this.props.dispatch(fetchAllRequestsAction(this.state));
                this.query.value = '';
            });
        }
    }
    handlePageClick(params) {
        
        this.setState({limit: params.limit, offset: params.offset}, function(){
            console.log('handlePageClick:', this.state, params);
            this.props.dispatch(fetchAllRequestsAction(this.state));
        });
    }
    render() {
        const { requests, selectedRequest, token } = this.props;
        return (
            <div className="container=fluid">
            {requests && selectedRequest? <div>

            <input type="text" ref={ref => (this.query = ref)} />
            <input type="submit" className="btn btn-primary"
                onClick={this.handleSearch} />  

                

            <div className="row">
            <RequestListPage requests={requests}
                selectedRequest={selectedRequest}
                onHandleSelectRequest={this.handleSelectedRequest}
                onHandlePageClick={this.handlePageClick}
                onHandleReply={this.handleReply}
                onHandleReplyChange={this.handleReplyChange}
            />
            </div> 
            </div>
            
            :'loadding...'}

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
            </div>
        );
    }
}

RequestPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object,
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

