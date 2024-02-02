import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"


const initialState = {
    isLoading : false,
    users :[],
    error:'',
}
const userReducer = (prevState = initialState,action) =>{

    switch(action.type){
        case FETCH_USER_REQUEST : return{
            ...prevState,
            isLoading:true,
        }

        case FETCH_USER_SUCCESS :return {
            isLoading : false,
            users: action.payload,
            error :'',
        }

        case FETCH_USER_FAILURE: return {
            isLoading: false,
            users:[],
            error: action.payload,
        }
        default : return prevState;

    }

}

export default userReducer;