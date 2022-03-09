import React from 'react';
import classes from "./MyPost.module.css";

const MyPost = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes['post-item']}>
                <div className={classes['post-img']}>
                    <img src="https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg"
                          alt="author avatar"/>
                </div>
                <div className={classes['post-content']}>
                    {props.message}
                    <div>
                        <span>Like ♥ {props.likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPost;