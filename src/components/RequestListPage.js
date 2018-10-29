import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import RequestItem from './RequestItem';
import ResultForm from './ResultForm.js';

class RequestListPage extends React.Component {
    constructor(props) {
        super(props);
        this.pageClick = this.pageClick.bind(this);
        this.toggleResultForm = this.toggleResultForm.bind(this);
        this.state = {
            pn: 1,
            formActive: false,
        }
    }
    pageClick(step) {
        const {next, previous } = this.props.requests;
        if ((step === -1 && previous) || (step === 1 && next)) {
            const url = (step === -1 && previous)?previous:next;
            const params = this.parseUrl(url);           
            
            this.props.onHandlePageClick(params);
            
            
        }
        
    }
    parseUrl(url) {
        let params = {}
        url.split('?')[1].split('&').forEach(element => {
            let vars = element.split('=');
            params[vars[0]] = vars[1];
        });
        //console.log('matched:', params);
        return params;
    }
    toggleResultForm(){
        const toggleForm = this.state.formActive;
        this.setState({formActive: !toggleForm});
    }
    render() {
        const { requests, selectedRequest, onHandleSelectRequest, onHandleReplyChange, onHandleReply} = this.props;

        return (
            <div className="col-sm-12">
                <h2>Requests</h2>
                <div className="panel panel-default" key={selectedRequest.id} >
                    
                    <div className="panel-heading">{selectedRequest.message}</div>
                    

                    <div className="panel-body">
                        <span className="col-sm-6 text text-xs">Date: {selectedRequest.created}</span>
                        <span className="col-sm-6">
                        <Link to="{`/reply/${selectedRequest.id}`}">
                    <button className="btn btn-info">Add Reply</button>
                    </Link>
                        : {(selectedRequest.results && selectedRequest.results.length)?
                                selectedRequest.results.length:
                                0
                                }</span>
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
                {requests.results.map((request, i) => {
                    return (
                        <RequestItem key={i} request={request}
                    selectedRequest={selectedRequest}
                    onHandleSelectRequest={onHandleSelectRequest} />
                    );
                }
                )}
                </div>

                <nav aria-label="Paging">
                <ul className="pagination">
                    <li className={"page-item " + (requests.previous?'active':'disabled')}>
                    <a className="page-link" tabIndex="-1" onClick={() => {this.pageClick(-1)}}>Previous</a>
                    </li>
                    <li className="page-item"></li>
                    
                    <li className={"page-item " + (requests.next?'active':'disabled')}>
                    <a className="page-link" onClick={() => {this.pageClick(1)}}>Next</a>
                    </li>
                </ul>
                </nav>

            </div>
        );
    }
}

RequestListPage.propTypes = {
    requests: PropTypes.object,
    selectedRequest: PropTypes.object,
    onHandleSelectRequest: PropTypes.func.isRequired,
    onHandlePageClick: PropTypes.func.isRequired,
    //onHandleReplyChange: PropTypes.func.isRequired,
    //onHandleReply: PropTypes.func.isRequired,
};

export default RequestListPage;
