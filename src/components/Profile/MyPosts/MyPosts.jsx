import React from 'react';
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    let postElements = props.state.postData
        .map((post) => <MyPost message={post.message} key={post.id} likeCount={post.likeCount}/>);
    return (
        <div>
            <NewPost addPost = {props.addPost}/>
            <div className={classes['posts']}>
                {postElements}

            </div>
        </div>
    );
};

export default MyPosts;