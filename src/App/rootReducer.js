import { combineReducers } from "redux";
import occupationsReducer from "../features/occupations/occupationsSlice";
import skillsReducer from "../features/skills/skillsSlice";

const rootReducer = combineReducers({
  occupations: occupationsReducer,
  skills: skillsReducer,
});

export default rootReducer;
