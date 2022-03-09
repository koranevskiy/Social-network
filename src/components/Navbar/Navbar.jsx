import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendSideBar from "./FriendSideBar/FriendSideBar";
import {useSelector} from "react-redux";


const Navbar = (props) => {

    let friendState = useSelector((state) => state.sideBar.friends)
    let friendsElements = friendState.map((item, index) => {
        return (
            <FriendSideBar id={item.id} key={index}/>
        )
    });
    return (
        <nav className={classes.nav}>
            <ul className={classes.menu}>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/profile">Profile</NavLink></li>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/dialogs">Messages</NavLink></li>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/news">News </NavLink></li>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/music">Music </NavLink></li>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/settings">Settings</NavLink></li>
                <li className={classes.item}><NavLink
                    className={({isActive}) => (isActive ? classes.active : '')}
                    to="/users">Users</NavLink></li>
                <li className={classes.item}>

                    <div className={classes.link}>
                        <NavLink className={({isActive}) => (isActive ? classes.active : '')} to={'/friends'}>
                            Friends
                        </NavLink>
                    </div>
                    <div className={classes.friends}>
                        {friendsElements}
                    </div>


                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
