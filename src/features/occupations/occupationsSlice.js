import { createSlice } from "@reduxjs/toolkit";

export const occupationsSlice = createSlice({
  name: "occupations",
  initialState: {
    occupationsArray: [
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

export const occupationsArray = (state) => state.occupations.occupationsArray;

export default occupationsSlice.reducer;
