import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../../../helpers/history';
import { alertActions } from '../../../actions/alert';
// import { LoginPage }

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

    render() {
        return (
            <div className="jumbotron">
                  <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
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