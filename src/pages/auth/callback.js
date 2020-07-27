import React, {useEffect} from "react";
import oidcUserManager from "../../service/authService";
import { connect, useDispatch, useSelector } from "react-redux";
import {userFound, loadingUser, loadUserError, getUser} from "../../actions/user/userAction";

export const Callback = async(payload) => {
        const dispatch = useDispatch();
        
        await oidcUserManager.signinCallback(window.location.href);

        useEffect(() => {
            dispatch(getUser());
        },[dispatch])
    return (
        <div>Application Loading</div>
    );
};