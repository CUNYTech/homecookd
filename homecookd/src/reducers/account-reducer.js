import { LOGIN_USER } from '../actions/account-actions';

export default function accountReducer(state='', {type, payload}){
    switch(type){
        case LOGIN_USER:
            return payload.logged;
        default:
            return state;
    }
}
