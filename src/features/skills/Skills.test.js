import store from "../../App/store";
import { addSkill, removeSkill } from "./skillsSlice";

describe("Testing functionality of Skills component", () => {
  it("Id of initialState", () => {
    let state = store.getState().skills;
    const initialState = state.skillsArray.find((el) => el.id === 0);
    expect(initialState).toBeTruthy();
  });
});
