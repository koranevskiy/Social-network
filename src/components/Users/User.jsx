import React from 'react';
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.jpg";

const User = ({user, ...props}) => {
    return (
        <div key={user.id} className={classes.usersRow}>
            <div className={classes.userItem}>
                <div className={classes.userImg}>
                    <NavLink to={`/profile/${user.id}`}><img
                        src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/></NavLink>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.nameAndStatus}>
                        <div className={classes.name}>
                            {user.name}
                        </div>
                        <div className={classes.status}>
                            {user.status}
                        </div>
                    </div>
                    <div className={classes.location}>
                        <div className={classes.city}>
                            {"user.location.city"}
                        </div>
                        <div className={classes.country}>
                            {"user.location.country"}
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.userItemButton}>
                {user.followed ? <button disabled={props.followingProgress.find(id => id === user.id)}
                                         onClick={() => {
                                             props.unfollow(user.id)
                                         }}>Unfollow</button> :
                    <button disabled={props.followingProgress.find(id => id === user.id)}
                            onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
            </div>
        </div>
    );
};

export default User;