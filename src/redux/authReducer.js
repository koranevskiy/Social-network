import {logAPI, userAPI} from "../api/api";

const SET_USER_AUTH = 'SET_USER_AUTH';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {...state, id: action.id, login: action.login, email: action.email, isAuth: action.isAuth}
        default:
            return {...state}
    }
}

export const setUserAuthAC = ({id, login, email, isAuth}) => ({type: SET_USER_AUTH, id, login, email, isAuth});
export const authUserThunk = () => (dispatch) => {
    return userAPI.authUserMe()
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setUserAuthAC({...response.data.data, isAuth: true}));
        })
};

export const authInThunkCreator = ({email, password, rememberMe}, setStatus) => (dispatch) => {
    logAPI.logIn({email, password, rememberMe})
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserThunk());
            } else {
                setStatus({error: response.data.messages})
            }
        })
}
export const authOutThunk = (dispatch) => {
    logAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAuthAC({id: null, login: null, email: null, isAuth: false}))
            }
        })
}
export default authReducer;