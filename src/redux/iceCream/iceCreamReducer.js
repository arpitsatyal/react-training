import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    noOfIceCreams: 50
};

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
        return {
            ...state,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state;
    }
}

export default iceCreamReducer;