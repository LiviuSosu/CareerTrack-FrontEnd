import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect,Link, withRouter } from 'react-router-dom';

import { history } from '../../../helpers/history';
import { alertActions } from '../../../actions/alert';
import { Login } from '../../components/Login/Login';
import { Home } from '../../components/HomePage/Home';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // possible error
            //make sure to remove location and action if they are not necesary
           this.props.clearAlerts();
        });
    }

//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
    render() {
        const { alert } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to="/Home" className="nav-item nav-link">Home</Link>
                        <Link to="/Login" className="nav-item nav-link">Login</Link>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <p>{alert.message}</p>
                        }
                            <Route path="/Login" component={Login} />
                            <Route path="/Home" component={Home} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };