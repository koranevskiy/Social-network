import React, {memo, useEffect} from 'react';
import classes from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";
import {getProfileStatusThunkCreator, setUserProfileThunkCreator} from "../../redux/profileReducer";
import {useDispatch} from "react-redux";

const Profile = memo((props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUserProfileThunkCreator(props.userId));
        dispatch(getProfileStatusThunkCreator(props.userId));
    }, [])

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <main>
            <div className={classes.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </main>
    )
});

export default Profile;