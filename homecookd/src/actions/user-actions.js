import { ACCOUNT_TYPE } from './actionTypes'

export function updateAccountType(type){
    return {
        type: ACCOUNT_TYPE,
        payload: {
            accountType: type
        }
    };
}
