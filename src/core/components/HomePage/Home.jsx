import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>some Home page</p>
        );
    }
}

function mapState(state) {
    return {  };
}

const actionCreators = {
};

const connectedLogin = connect(mapState, actionCreators)(Home);
export { connectedLogin as Home };