import React from 'react';
import { useSelector , useDispatch  } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';
const IceCreamComponent = () => {

    const numOfIceCream = useSelector((state)=>state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>No of ice cream : {numOfIceCream} </h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy ice cream</button>
        </div>
    );
}
 
export default IceCreamComponent;