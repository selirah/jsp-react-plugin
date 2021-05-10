import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfigureStore from './store/store';
import 'jquery';
import 'popper.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'leaflet/dist/leaflet.css';
import './index.css';

const initialState = window.INITIAL_REDUX_STATE;
export const { store, persistor } = ConfigureStore(initialState);

const reactAppData = window.rpReactPlugin || {};
const { appSelector } = reactAppData;
const appAnchorElement = document.querySelector(appSelector);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>,
  // appAnchorElement
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
