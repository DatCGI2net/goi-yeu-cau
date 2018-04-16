import React from 'react';
import {Link} from 'react-router';


const HomePage = () => (
    <div className="jumbotron center">
        <h1 className="lead">Chào mừng quí khách!</h1>
        <div className="heading">Something fun will be show</div>
        <div>
        <Link to="requests">
        <button className="btn bt-lg btn-primary">View Requests</button>
        </Link>
        </div>
        
    </div>
);

export default HomePage;

