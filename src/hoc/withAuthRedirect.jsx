import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const withAuthRedirect = (Component) => {
    return (props) => {

        const navigate = useNavigate();
        let isAuth = useSelector(state => state.auth.isAuth);
        useEffect(() => {
            if (!isAuth) {
                navigate('/login')
            }
        }, [isAuth])

        return (
            <Component {...props}/>
        )
    }
}
export default withAuthRedirect;