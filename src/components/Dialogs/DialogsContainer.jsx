import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../redux/dialogReducer";
import {useDispatch, useSelector} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const DialogsContainer = (props) => {
    const dispatch = useDispatch();

    let onClickMessage = (text) => {
        dispatch(addMessageActionCreator(text));
    };
    let state = useSelector(state => state.dialogPage);
    const DialogsWithAuth = withAuthRedirect(Dialogs);
    return (
        <DialogsWithAuth state = {state}
         onClickMessage = {onClickMessage}/>
    );
};

export default DialogsContainer;