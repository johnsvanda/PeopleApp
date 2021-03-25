import { createSlice } from "@reduxjs/toolkit";
import PersonalInfo from "../personalInfo/PersonalInfo.jsx";
import Skills from "../skills/Skills.jsx";

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    defaultTabId: 0,
    tabsArray: [
      { id: 0, title: "Personal Info", content: <PersonalInfo /> },
      { id: 1, title: "Skills", content: <Skills /> },
    ],
  },
  reducers: {},
});

//export const {} = tabsSlice.actions;

export const tabsArray = (state) => state.tabs.tabsArray;
export const defaultTabId = (state) => state.tabs.defaultTabId;
export default tabsSlice.reducer;
