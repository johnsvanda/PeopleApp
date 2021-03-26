import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";

describe("React with redux works correctly", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  it("renders App component without crashing", () => {
    store = mockStore(initialState);
    render(<App />);
    expect(screen.getByText("First Name"));
  });
});
