import React from 'react';
// import ReactDOM from 'react-dom'; // Used previously with React 17
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk"
import authReducer from './components/login/AuthReducer';

const reducers = combineReducers({ authReducer })
const store = createStore(reducers, compose(applyMiddleware(thunk)))

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);