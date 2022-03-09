import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialReducer = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    usersCount: 15,
    isFetching: false,
    followingProgress: []
};


let usersReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;

                })
            }
        case SET_USERS:
            return {...state, users: action.users};
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : [state.followingProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (pages) => ({type: SET_TOTAL_COUNT, totalCount: pages});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgressAC = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});
export const getUsersThunkCreator = (page) => (dispatch) => {
    dispatch(setCurrentPageAC(page));
    dispatch(toggleIsFetchingAC(true));
    userAPI.getUsers(page)
        .then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));
        })
};
export const followThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId));
    userAPI.follow(userId)
        .then(data => {
            dispatch(toggleIsFollowingProgressAC(false, userId));
            dispatch(followAC(userId));
        })
};
export const unfollowThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgressAC(true, userId));
    userAPI.unfollow(userId)
        .then(data => {
            dispatch(toggleIsFollowingProgressAC(false, userId));
            dispatch(unfollowAC(userId));
        })
};
export default usersReducer;