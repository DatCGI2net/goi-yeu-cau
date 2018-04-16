import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import { logoutAction } from '../actions/authAction';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    // handle search 
    handleLogout(event) {
        event.preventDefault();
        //console.log('call logout here?', this.props);
        this.props.dispatch(logoutAction());            
        
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <Header token={this.props.token} onHandleLogout={this.handleLogout} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};
  
//stat to props
const mapStateToProps = (state) => {
    console.log('state:', state);
    return {
        token: state.auth.token,
        error: state.auth.error
    }
}


export default connect(mapStateToProps)(App);
//export default App;
