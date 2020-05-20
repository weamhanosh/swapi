import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import sagas from './sagas';
import App from './components/App/App';

import './index.css';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//create store, add reducers, attach saga
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

//run saga(s)
sagaMiddleware.run(sagas);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

export default this;
