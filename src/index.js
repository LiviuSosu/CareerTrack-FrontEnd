import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './core/components/Navbar';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/index';
import { App } from './core/components/App/App'

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    {/* <Navbar /> */}
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();