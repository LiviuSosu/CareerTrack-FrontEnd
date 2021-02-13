import React from 'react';
import { connect } from 'react-redux';

class Articles extends React.Component {

    render() {
        return (
            <p>some Articles page</p>
        );
    }
}

function mapState(state) {
    return {  };
}

const actionCreators = {
};

const connectedLogin = connect(mapState, actionCreators)(Articles);
export { connectedLogin as Articles };