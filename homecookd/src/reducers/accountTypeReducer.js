import { ACCOUNT_TYPE } from '../actions/actionTypes';

export default function accountType(state='', {type, payload}){
    switch(type){
        case ACCOUNT_TYPE:
          return payload.accountType;
        default:
            return state;
    }
}
