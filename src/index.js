import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import CentralReducer from './reducers/CentralReducer'


const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(CentralReducer)


ReactDOM.render(<Provider store={store}> 
    <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.register();