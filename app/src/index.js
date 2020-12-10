import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";


import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/index";

const store = createStore(reducer, applyMiddleware(thunk, logger));
// if you use redux-logger with other middleware packages, make sure 
// logger is passed to applyMiddleware last.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
