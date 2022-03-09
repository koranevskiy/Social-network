import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.messageAva}><NavLink to="/dialogs/?bl"> <img
                src="https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg" alt="avatar"/>
            </NavLink></div>
            <div className={classes.messageContent}>
                <span>{props.message}</span>
            </div>
        </div>
    );
};

export default Message;