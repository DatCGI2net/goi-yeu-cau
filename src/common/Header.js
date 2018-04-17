import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {

    render() {
        const { token, onHandleLogout } = this.props;
        const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
        console.log('token in header:', token, 'baseUrl:', baseUrl);
        return (
            <div className="text-center">
                <nav className="navbar navbar-default">
                <IndexLink to={baseUrl + "/"} activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="requests" activeClassName="active">Requests</Link>
                {" | "}
                {!token?
                    <Link to="login" activeClassName="active pull-right">Login</Link>
                    :
                    <Link to="logout" onClick={onHandleLogout.bind(this)} activeClassName="active pull-right">Logout</Link>
                }
                
                </nav>
            
            </div>
        );
    }
    
}

export default Header;