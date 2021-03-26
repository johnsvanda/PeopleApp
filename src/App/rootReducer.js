import { combineReducers } from "redux";
import tabsReducer from "../features/tabs/tabsSlice";
import occupationsReducer from "../features/occupations/occupationsSlice";
import skillsReducer from "../features/skills/skillsSlice";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  occupations: occupationsReducer,
  skills: skillsReducer,
});

export default rootReducer;
