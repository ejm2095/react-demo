import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Microwave from './components/Microwave';
import './index.css';

export default () => (
  <Provider store={store}>
      <Microwave />
  </Provider>
);
