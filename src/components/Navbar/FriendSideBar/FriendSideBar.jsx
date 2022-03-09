import React from 'react';
import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const FriendSideBar = (props) => {
    return (
        <div className={classes.friendImg}>
            <NavLink to={`/friends/${props.id}`}>
                <img src="https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg"
                     alt="avatar"/>
            </NavLink>
        </div>
    );
};

export default FriendSideBar;