import React, { Component } from 'react';
import config from '../../../config/config.Developlent.json';

export class HomePage extends Component {


    render() {
        return (<div>
            <p>this is a HOMEPAGE borat {config.baseUrl} </p>
        </div>);
    }
}