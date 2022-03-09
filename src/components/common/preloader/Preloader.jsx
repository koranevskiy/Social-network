import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import classes from "./Preloader.module.css";
const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;