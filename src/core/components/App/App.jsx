import React from 'react';
import { connect } from 'react-redux';
import { Route,Link } from 'react-router-dom';

import { history } from '../../../helpers/history';
import { alertActions } from '../../../actions/alert';
import { userActions } from '../../../actions/user';
import { PrivateRoute } from '../../components/PrivateRoute';
import { Login } from '../../components/Login/Login';
import { Home } from '../../components/HomePage/Home';
import { Articles } from '../../components/Articles/Articles';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // possible error
            //make sure to remove location and action if they are not necesary
           this.props.clearAlerts();
        });

        this.logout =  this.logout.bind(this);
    }

logout(){
    this.props.logout('Bearer aaa.vvvvv.ssss')
}

//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
    render() {
        console.log(JSON.parse(localStorage.getItem('user')));
        const { alert } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to="/Home" className="nav-item nav-link">Home</Link>
                        <Link to="/Login" className="nav-item nav-link">Login</Link>
                        <Link to="/Articles" className="nav-item nav-link">Articles</Link>
                        <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                            <Route path="/Login" component={Login} />
                            <Route path="/Home" component={Home} />
                            {/* <PrivateRoute path="/Articles" component={Articles} /> */}
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
    clearAlerts: alertActions.clear,
    logout: userActions.logout
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };