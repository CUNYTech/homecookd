import { LOGIN_USER, ACCOUNT_TYPE } from '../actions/actionTypes';

export default function accountReducer(state='', {type, payload}){
  switch(type){
    case LOGIN_USER:
      return payload.logged;
    case ACCOUNT_TYPE:
      return payload.accountType;
    default:
      return state;
  }
}
