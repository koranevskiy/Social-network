import React, {memo} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authOutThunk} from "../../redux/authReducer";


const Header = memo(() => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth);


    const logOut = () => {
        dispatch(authOutThunk);
    }

    return (
        <header className={classes.header}>
            <div className={classes.headerImg}><img
                src="https://upload.wikimedia.org/wikipedia/ru/6/61/UC_Browser_logo.png" alt="logo"/></div>
            <div className={classes.login}>
                {state.isAuth ? <div>{state.login}
                    <button onClick={logOut}>Log out</button>
                </div> : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
});

export default Header;