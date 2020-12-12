import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './core/components/Navbar';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'
import { Router } from "react-router-dom";
import { history, Role } from './helpers/history';
// import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from "./store/index";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    {/* <App /> */}
    <Navbar />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import { render } from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store/index";
// import Navbar from "./core/components/Navbar";
// import { Router } from "react-router-dom";
// import { history, Role } from './helpers/history';

// render(
//   <Provider store={store} >
//     <Router history={history}>
//       <Navbar />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );