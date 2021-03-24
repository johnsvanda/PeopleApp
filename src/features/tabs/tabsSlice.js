import { createSlice } from "@reduxjs/toolkit";

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    defaultTabId: 0,
    tabsArray: [
      { id: 0, title: "Personal Info" },
      { id: 1, title: "Skills" },
    ],
  },
  reducers: {},
});

//export const {} = tabsSlice.actions;

export const tabsArray = (state) => state.tabs.tabsArray;
export const defaultTabId = (state) => state.tabs.defaultTabId;
export default tabsSlice.reducer;
