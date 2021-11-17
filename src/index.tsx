import 'babel-polyfill';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './redux/store';
import { unregister } from './serviceWorker';

const { store, persistor } = configureStore(createBrowserHistory());

const rootEl = document.getElementById('root');

if (rootEl) {
  unregister();
  ReactDOM.render(<App store={store} persistor={persistor} />, rootEl);
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    if (rootEl) {
      ReactDOM.render(<NextApp store={store} persistor={persistor} />, rootEl);
    }
  });
}
