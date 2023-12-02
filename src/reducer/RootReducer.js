import { combineReducers } from "redux";

import { customerReducer } from "../Customer/CustomerReducer";
import { postReducer } from "./PostReducer";
import accountReducer from "../Account/AccountSlice";

export const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,

    
})