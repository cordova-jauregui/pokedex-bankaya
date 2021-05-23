import React from "react";
import { render } from "@testing-library/react-native";
import BackgroundPokeType from "../src/components/pokeDetails/backgroundPokeType";
describe("<BackgroundPokeType />", () => {
  let component;
  beforeEach(() => {
    component = render(<BackgroundPokeType types={[{ type: { name: "" } }]} />);
  });
  it("Renders correctly", () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("pokeDetails-ImageBackground")).toBeDefined();
  });
  it("Check Pokemon Type picture URI", () => {
    const { getByTestId } = component;
    const pokeUri = "../../../assets/pokeTypes/normal.jpeg";
    expect(
      getByTestId("pokeDetails-ImageBackground").props.source.testUri
    ).toBe(pokeUri);
  });
});
