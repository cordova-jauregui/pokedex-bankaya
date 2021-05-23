import React from "react";
import { render } from "@testing-library/react-native";
import TableRow from "../src/components/TableRow";
describe("<TableRow />", () => {
  let component;
  beforeEach(() => {
    component = render(<TableRow label="myLabel" text="myText" />);
  });
  it("Renders correctly", () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("tableRow-label")).toBeDefined();
    expect(component.getByTestId("tableRow-text")).toBeDefined();
  });
  it("Render correct params", () => {
    expect(component.getByTestId("tableRow-label").props.children).toBe(
      "myLabel"
    );
    expect(component.getByTestId("tableRow-text").props.children).toBe(
      "myText"
    );
  });
  it("Render the child", () => {
    component = render(<TableRow>myChild</TableRow>);
    expect(component.getByTestId("tableRow-children")).toBeDefined();
  });
});
