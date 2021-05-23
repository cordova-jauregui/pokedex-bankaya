import React from "react";
import { render } from "@testing-library/react-native";
import PokeAvatar from "../src/components/pokeAvatar";
describe("<pokeAvatar />", () => {
  it("Renders correctly", () => {
    const component = render(<PokeAvatar />);
    expect(component).toBeDefined();
    expect(component.getByTestId("pokeAvatar-image")).toBeDefined();
  });
  it("Check Pokemon picture URI", () => {
    const pokeUri = "https://pokeres.bastionbot.org/images/pokemon/default.png";
    const { getByTestId } = render(<PokeAvatar id="default" />);
    expect(getByTestId("pokeAvatar-image").props.source.uri).toBe(pokeUri);
  });
  it("Check Pokemon picture Size", () => {
    const { getByTestId } = render(<PokeAvatar size={50} />);
    expect(getByTestId("pokeAvatar-image").props.style).toMatchObject({
      height: 50,
      width: 50,
    });
  });
});
