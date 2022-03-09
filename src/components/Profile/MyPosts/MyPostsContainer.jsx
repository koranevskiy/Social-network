import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";

const MyPostsContainer = (props) => {
    const dispatch = useDispatch();
    const profilePage = useSelector((state) => state.profilePage);
    let addPost = (message) =>{
        dispatch(addPostActionCreator(message));
    }

    let state = profilePage;
    return (
      <MyPosts state = {state} addPost = {addPost}/>
    );
};

export default MyPostsContainer;