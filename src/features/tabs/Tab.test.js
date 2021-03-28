import { render, fireEvent, screen } from "@testing-library/react";
import Tab from "./Tab";

describe("<Tab />", () => {
  it("renders without crashing", () => {
    render(<Tab />);
  });

  it("props work", () => {
    const { getByText } = render(<Tab title="foo" />);
    getByText("foo");
  });
});
