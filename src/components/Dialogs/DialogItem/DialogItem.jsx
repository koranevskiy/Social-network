import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <div className={classes.dialogImg}>
                <NavLink to={`/dialogs/${props.id}`}> <img
                    src="https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg" alt="avatar"/>
                </NavLink>
            </div>

            <div className={classes.dialogContent}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
        </div>
    );
};

export default DialogItem;