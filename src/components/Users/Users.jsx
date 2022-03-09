import React from 'react';
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({counts, onChangeCurrentPage, ...props}) => {
    const {currentPage, totalCount, usersCount} = counts;

    return (
        <div className={classes.users}>
            <Paginator currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}
            totalCount={totalCount} itemsCount={usersCount}/>
            {
                props.users.map(user => {
                    return <User key={user.id} user={user} followingProgress={props.followingProgress} follow={props.follow}
                                 unfollow={props.unfollow}/>
                })
            }
        </div>
    );
};

export default Users;