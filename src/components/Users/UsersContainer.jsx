import React from 'react';
import UsersAPI from "./UsersAPI";
import {useDispatch, useSelector} from "react-redux";
import {
    getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
} from "../../redux/usersReducer";

const UsersContainer = () => {
    let dispatch = useDispatch();
    let state = useSelector(state => state.usersPage.users);
    let counts = useSelector(state => ({
        totalCount: state.usersPage.totalCount,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }));
    let isFetching = useSelector(state => state.usersPage.isFetching);
    let followingProgress = useSelector(state => state.usersPage.followingProgress);
    const follow = userId => {
        dispatch(followThunkCreator(userId));
    }
    const unfollow = userId => {
        dispatch(unfollowThunkCreator(userId));
    }


    const getUsers = (page) => {
        dispatch(getUsersThunkCreator(page));
    }

    return (
        <UsersAPI users={state} follow={follow} unfollow={unfollow} counts={counts} isFetching={isFetching}
                  followingProgress={followingProgress}
                  getUsers={getUsers}/>
    );
};

export default UsersContainer;