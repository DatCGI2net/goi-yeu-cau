import React from 'react';
import {Link} from 'react-router';


const HomePage = () => (
    <div className="jumbotron center">
        <h1 className="lead">Welcome to my small reactjs app with redux-saga and djang rest backend!</h1>
        <div className="heading">It allows to login, post request and list/search requests</div>
        <div>
        <Link to="requests">
        <button className="btn bt-lg btn-primary">View Requests</button>
        </Link>
        </div>
        
    </div>
);

export default HomePage;

