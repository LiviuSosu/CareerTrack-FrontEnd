import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { App } from './core/components/App/App'

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);