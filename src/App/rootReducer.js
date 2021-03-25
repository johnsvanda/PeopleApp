import { combineReducers } from "redux";
import tabsReducer from "../features/tabs/tabsSlice";
import occupationsReducer from "../features/occupations/occupationsSlice";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  occupations: occupationsReducer,
});

export default rootReducer;
