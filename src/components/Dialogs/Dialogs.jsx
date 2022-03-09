import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useFormik} from "formik";


const Dialogs = (props) => {

    let onClickMessage = (text) => {
        props.onClickMessage(text);
    };
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: ({message}) => {
            onClickMessage(message);
        }
    })
    let dialogsElements = props.state.dialogsData
        .map((item) => {
            return <DialogItem name={item.name} id={item.id} key={item.id}/>;
        })
    let messagesElement = props.state.messages
        .map((item) => <Message message={item.message}
                                key={item.id}/>);


    return (
        <div className={classes.structDialog}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>

                    {messagesElement}

                </div>
            </div>
            <form onSubmit={handleSubmit} className={classes.newMessage}>
                    <textarea name={'message'} value={values.message}
                              onChange={handleChange}></textarea>
                <button type={'submit'}>Send</button>
            </form>
        </div>
    );
};

export default Dialogs;