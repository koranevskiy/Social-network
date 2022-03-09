import React, {useEffect} from 'react';
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import classes from "./Users.module.css";


const UsersAPI = (props) => {

    useEffect(() => {
        props.getUsers(props.counts.currentPage);

    }, [])

    let onChangeCurrentPage = (page) => {
        props.getUsers(page);
    }


    return (

        <div className={classes.usersAPIContainer}>
            {props.isFetching ? <Preloader/> : null}
            <Users onChangeCurrentPage={onChangeCurrentPage} counts={props.counts} users={props.users}
                   follow={props.follow} unfollow={props.unfollow}
             followingProgress={props.followingProgress}/></div>
    );
};

export default UsersAPI;