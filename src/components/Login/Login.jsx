import React from 'react';
import classes from "./Login.module.css";
import {useFormik} from "formik";
import validationSchema from "../../utils/validators/logIn";
import {useDispatch, useSelector} from "react-redux";
import {authInThunkCreator} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
const Login = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const logIn = (values, setStatus) => {
        dispatch(authInThunkCreator(values, setStatus));
    }
    const {handleSubmit, handleChange, values, touched, errors, status} = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema,

        onSubmit: (values, {setStatus}) => {

            logIn(values, setStatus);

        }
    })
    if(isAuth){
        return <Navigate to={'/dialogs'}/>
    }

    return (
        <div>
            <h1>Log into account</h1>
            <div className={classes.form}>
                <form className={classes.formLogin} onSubmit={handleSubmit}>
                    <div className={classes.data}>
                        <div className={touched.email && errors.email ? classes.dataItem + ' ' + classes.danger : classes.dataItem}>
                            <input type="text" name={'email'} onChange={handleChange} value={values.email}
                                   placeholder={'Login'}/>
                            <div className={classes.dangerous}>
                                {(touched.email && errors.email) ? errors.email : null}

                            </div>
                        </div>
                        <div className={touched.password && errors.password ? classes.dataItem + ' ' + classes.danger : classes.dataItem}>
                            <input type="password" name={'password'} onChange={handleChange} value={values.password}
                                   placeholder={'Password'}/>
                            <div className={classes.dangerous}>
                                {(touched.password && errors.password) ? errors.password : null}
                            </div>
                        </div>
                    </div>
                    <div className={classes.login}>
                        <div className={classes.remember}>
                            <input type="checkbox" name={'rememberMe'} value={values.remember} onChange={handleChange}/>
                            <div>
                                remember me
                            </div>
                        </div>
                        <div className={classes.btn}>
                            <button type={'submit'}>Log in</button>
                            {status? <div>{status.error.map(item => (<div className={classes.dangerous}>{item}</div>))}</div>: null}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;