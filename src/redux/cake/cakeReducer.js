import { BUY_CAKE } from "./cakeTypes"
const initialState = {
    numOfCakes : 10,
}

const cakeReducer = (prevState = initialState,action) =>{
      
     switch(action.type){
        case BUY_CAKE:
            return{
            ...prevState,
            numOfCakes:prevState.numOfCakes - 1,
        }

        default:
            return{
            ...prevState,
        }
     }
}

export default cakeReducer;