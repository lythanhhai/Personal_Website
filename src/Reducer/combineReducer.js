import { combineReducers } from "redux";
import getIndexReducer from "./getIndexReducer";

const CombineReducer = combineReducers(
    {
        getIndexReducer: getIndexReducer,
    }
)

export default CombineReducer;