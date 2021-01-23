import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        return (
            <p>This is the APP component</p>
        );
    }
}

function mapState(state) {
    // const { alert } = state;
    return { alert };
}

const actionCreators = {
    // clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };