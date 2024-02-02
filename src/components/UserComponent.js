import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';
const UserComponent = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchUsers());
    },[]);

    const state = useSelector((state)=>state);
    return (
    state.user.isLoading ? <div>Loading</div> :
    state.user.error ? <div>Error : {state.user.error}</div> :
    <div>
       { state && state.user && state.user.users && state.user.users.map((user)=><p>{user.name}</p>)}
    </div>
        );
}
 
export default UserComponent;