import React from 'react';
import classes from './NewPost.module.css';
import {useFormik} from "formik";


const NewPost = (props) => {
    let addPost = (message) => {
        props.addPost(message);
    };
    const {handleSubmit, handleChange, values, handleReset} = useFormik({
        initialValues: {
            post: '',
        },
        onSubmit: ({post}) => {
            addPost(post);
            handleReset();
        }
    })
    return (
        <div className={classes['my-post']}>
            <div className={classes['post-title']}>
                My posts
            </div>
            <form className={classes['new-post']} onSubmit={handleSubmit}>
                <textarea name={'post'} value={values.post} onChange={handleChange}></textarea>
                <div className={classes['new-post-button']}>

                    <button className={classes.btn} type={'submit'}>send</button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;