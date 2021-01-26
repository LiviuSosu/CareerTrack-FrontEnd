import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>some Login page</p>
        );
    }
}

function mapState(state) {
    return {  };
}

const actionCreators = {
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };