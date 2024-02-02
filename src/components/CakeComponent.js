import React from 'react';
import { buyCake } from '../redux/cake/cakeAction';
import { connect } from 'react-redux';

const CakeComponent = (props) => {
    return (
        <div>
            <h1>Number of cakes: {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = (state) =>{
return {
    numOfCakes : state.cake.numOfCakes,
}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake : () => dispatch(buyCake()),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent);