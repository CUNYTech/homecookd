export const LOGIN_USER = 'logged: logInUser';

export function logInUser(logged){
    return {
        type: LOGIN_USER,
        payload: {
            logged: logged
        }
    };
}