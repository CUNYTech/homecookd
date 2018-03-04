import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/user-reducer';
import accountReducer from './reducers/account-reducer';


const allReducers = combineReducers({
    user: userReducer,
    logged: accountReducer
});

const store = createStore(
    allReducers, 
    {
        user: 'Alice',
        logged: ''
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
