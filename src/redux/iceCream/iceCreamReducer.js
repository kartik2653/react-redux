import { BUY_ICE_CREAM } from "./iceCreamType"


const initialState = {
    numOfIceCream : 20,
}

const iceCreamReducer = (prevState = initialState ,action) =>{
   switch (action.type){
    case BUY_ICE_CREAM : return {
        ...prevState,
        numOfIceCream : prevState.numOfIceCream - 1,
    }

    default: return prevState;
   }
}

export default iceCreamReducer;
