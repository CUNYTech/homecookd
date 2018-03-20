import { LOGIN_USER, ACCOUNT_TYPE } from './actionTypes';

export function changeLogged(logged){
  return {
    type: LOGIN_USER,
    payload: { logged }
  };
}

export function changeAccountType(accountType){
  return {
    type: ACCOUNT_TYPE,
    payload: { accountType }
  };
}
