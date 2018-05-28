import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './src/combineReducer';
import App from './src/app.container';
let store = createStore(
  rootreducer,
  );

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));