export const ACCOUNT_TYPE = 'users: updateUser';

export function updateUser(type){
    return {
        type: ACCOUNT_TYPE,
        payload: {
            accountType: type
        }
    };
}
