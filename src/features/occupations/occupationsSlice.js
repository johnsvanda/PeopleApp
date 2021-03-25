import { createSlice } from "@reduxjs/toolkit";

export const occupationsSlice = createSlice({
  name: "occupations",
  initialState: {
    array: [
      {
        code: "PRESIDENT",
        name: "President",
      },
      {
        code: "PHILANTHROPIST",
        name: "Bill Gates",
      },
      {
        code: "ASTRONAUT",
        name: "Astronaut",
      },
      {
        code: "JOCKEY",
        name: "Jockey",
      },
    ],
  },
  reducers: {},
});

//export const {} = occupationsSlice.actions;

export const occupationsArray = (state) => state.occupations.array;

export default occupationsSlice.reducer;
