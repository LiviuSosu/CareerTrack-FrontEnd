import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { App } from './core/components/App/App'

import {history} from './helpers/history';
import { BrowserRouter } from 'react-router-dom';

render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);