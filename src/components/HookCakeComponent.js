import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';
const HookCakeComponent = () => {

    const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
    <div>
        <h1>No of cakes : {numOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>);
}
 
export default HookCakeComponent;