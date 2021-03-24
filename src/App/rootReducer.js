import { combineReducers } from "redux";
import tabsReducer from "../features/tabs/tabsSlice";

const rootReducer = combineReducers({ tabs: tabsReducer });

export default rootReducer;
