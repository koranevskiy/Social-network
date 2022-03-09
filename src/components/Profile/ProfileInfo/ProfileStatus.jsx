import React, {useEffect, useState} from 'react';
import classes from "./ProfileStatus.module.css";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileStatusThunkCreator} from "../../../redux/profileReducer";

const ProfileStatus = (props) => {
    let status = useSelector(state => state.profilePage.status);
    let dispatch = useDispatch();
    let [editMode, setMode] = useState(false);
    let [localStatus, setLocalStatus] = useState(status);
    useEffect(() => {
        setLocalStatus(status);
    }, [status])
    const setStatus = () => {
        dispatch(updateProfileStatusThunkCreator(localStatus))
    }
    const activateEdit = () => {
        setMode(true);
    }
    const deactivateEdit = () => {
        setMode(false);
        setStatus();
    }


    const onChangeStatus = (e) => {
        setLocalStatus(e.currentTarget.value);
    }
    return (
        <div className={classes.status}>
            {!editMode &&
                <div className={classes.statusRow}>
                    <div onClick={activateEdit}>{status}</div>
                </div>
            }{editMode &&
            <div>
                <input autoFocus onChange={onChangeStatus} onBlur={deactivateEdit} type="text"
                       value={localStatus}/>
            </div>
        }
        </div>
    );
};

export default ProfileStatus;