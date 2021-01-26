import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect,Link, withRouter } from 'react-router-dom';

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

    componentDidMount() {
      //  this.props.getUsers();
    }
//https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
    render() {
        return (
            <div>
                 {/* <Router history={history}> */}
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav">
                            <Link to="/Home" className="nav-item nav-link">Home</Link>
                            <Link to="/Login" className="nav-item nav-link">Login</Link>
                        </div>
                    </nav>
                    
                    <div className="jumbotron">
                        <div className="container">
                            <div className="col-sm-8 col-sm-offset-2">
                                {/* <Redirect from="*" to="/" /> */}
                                <Route path="/Login" component={Login} />
                                <Route path="/Home" component={Home} />
                            </div>
                        </div>
                    </div>
                 {/* </Router> */}
            </div>
            // <div className="jumbotron">
            //     <div className="container">
            //         <div className="col-sm-8 col-sm-offset-2">
            //             {alert.message &&
            //                 <div className={`alert ${alert.type}`}>{alert.message}</div>
            //             }
            //             <Router history={history}>
            //                 <Switch>
            //                     <Route path="/login" component={Login} />
            //                     <Redirect from="*" to="/" />
            //                 </Switch>
            //             </Router>
            //         </div>
            //     </div>
            // </div>
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

const connectedApp = withRouter(connect(mapState, actionCreators)(App));
export { connectedApp as App };