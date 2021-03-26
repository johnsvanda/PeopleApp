import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skillsArray: [{ id: 0 }],
  },
  reducers: {
    addSkill: (state) => {
      let id = state.skillsArray.length;
      state.skillsArray.push({ id });
    },
    removeSkill: (state, action) => ({
      ...state,
      skillsArray: state.skillsArray.filter(({ id }) => id !== action.payload),
    }),
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export const skillsArray = (state) => state.skills.skillsArray;

export default skillsSlice.reducer;
