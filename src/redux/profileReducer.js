import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
let initialReducer = {
    postData: [
        {id: 1, message: 'Hello, this my first post', likeCount: 15},
        {id: 2, message: 'I\'m student yet(', likeCount: 19}
    ],
    profile: null,
    status: ''
};
let profileReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, postData: [...state.postData, {
                    id: state.postData.length + 1,
                    message: action.message,
                    likeCount: 0
                }],
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_PROFILE_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }

};
export default profileReducer;
export const addPostActionCreator = (message) => ({type: ADD_POST, message});

export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatusAC = (status) => ({type: SET_PROFILE_STATUS, status});

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
};
export const getProfileStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId)
        .then(response => {
            dispatch(setProfileStatusAC(response.data));
        })
};
export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setProfileStatusAC(status));
            }
        })
}