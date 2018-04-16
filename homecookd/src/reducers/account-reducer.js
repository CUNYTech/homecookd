import { LOGIN_USER, ACCOUNT_TYPE } from '../actions/actionTypes';

const initialState = {
  logged: false,
  accountType: ''
}

export default function accountReducer(state = initialState, action){
  let newState = Object.assign({}, state);

  switch(action.type){
    case LOGIN_USER:
      newState.logged = action.payload.logged;
      return newState.logged;
    case ACCOUNT_TYPE:
      newState.accountType = action.payload.accountType;
      return newState.accountType;
    default:
      return state;
  }
}
