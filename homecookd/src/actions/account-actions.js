export const LOGIN_USER = 'logged: logInUser';

export function changeLogged(logged){
    return {
        type: LOGIN_USER,
        payload: {
            logged: logged
        }
    };
}
