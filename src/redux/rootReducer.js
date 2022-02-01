import { combineReducers } from "redux";
import authRedcuer from "./auth/authRedcuer";
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    auth: authRedcuer
});

export default rootReducer;