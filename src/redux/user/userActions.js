import axios from "axios";
import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST } from "./userTypes";

export const fetchUserRequest = () =>{
    return {
        type:FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (data) =>{
    return {
        type : FETCH_USER_SUCCESS,
        payload:data,
    }
}

export const fetchUserFailure = (err) =>{
    return {
        type : FETCH_USER_FAILURE,
        payload : err,
    }
}

export const fetchUsers = (val) =>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').
        then((response) =>{
            const users = response.data;
            dispatch(fetchUserSuccess(users));
        }).
        catch((err)=>{
            const msg = err.message;
            dispatch(fetchUserFailure(msg));
        })
    }
}