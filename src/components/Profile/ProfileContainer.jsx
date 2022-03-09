import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

const ProfileContainer = () => {
    const profile = useSelector(state => state.profilePage.profile);
    let userID = useSelector(state => state.auth.id)
    let {userId} = useParams();
    userId = userId || userID;

    let isAuth = useSelector(state => state.auth.isAuth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])
    return (
        <Profile profile={profile} userId={userId}/>
    );
};

export default ProfileContainer;