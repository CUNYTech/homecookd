import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import accountReducer from './account-reducer';

const allReducers = combineReducers({
    user: userReducer,
    logged: accountReducer
});

export default allReducers;