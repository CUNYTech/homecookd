import { ACCOUNT_TYPE } from '../actions/user-actions';

export default function userReducer(state={}, {type, payload}){
    switch(type){
        case ACCOUNT_TYPE:
            return payload.user;
        default:
            return state;
    }
}
