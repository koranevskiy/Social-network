import {authUserThunk} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    isInitialized: false
};

let appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {...state, isInitialized: true}
        default:
            return state;
    }
};
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authUserThunk());
    Promise.all([promise]).then(r => {
        dispatch(initializedSuccess());
    })
};
export default appReducer;

