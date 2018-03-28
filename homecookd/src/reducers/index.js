import { combineReducers } from 'redux';
import accountType from './accountTypeReducer';
import accountReducer from './account-reducer';

const allReducers = combineReducers({
    accountType: accountType,
    logged: accountReducer
});

export default allReducers;
