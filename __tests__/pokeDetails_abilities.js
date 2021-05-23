import React from "react";
import {
  render,
  act,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react-native";
import Abilities from "../src/components/pokeDetails/abilities";
import axiosMock from "axios";

jest.useFakeTimers();
// jest.mock("react-native-elements/dist/icons/Icon", () => () => "");

describe("<Abilities />", () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      effect_entries: [{ effect: "effect0" }, { effect: "effect1" }],
    },
  });
  let component;
  afterEach(() => cleanup);
  beforeEach(() => {
    component = render(
      <Abilities
        abilities={[
          { ability: { name: "Ability1", url: "" } },
          { ability: { name: "Ability2", url: "" } },
        ]}
      />
    );
  });
  it("Renders correctly", () => {
    expect(component).toBeDefined();
  });
  it("Renders abilities buttons", () => {
    const { getByTestId } = component;
    expect(getByTestId("ability_Ability1")).toBeDefined();
    expect(getByTestId("ability_Ability2")).toBeDefined();
    expect(getByTestId("abilityText_Ability1").props.children).toEqual(
      "Ability1"
    );
    expect(getByTestId("abilityText_Ability2").props.children).toEqual(
      "Ability2"
    );
  });
  it("Ability fireEvent press", () => {
    const ability = component.getByTestId("ability_Ability1");
    act(() => {
      fireEvent(ability, "press");
    });
    waitFor(() =>
      component
        .getByTestId("abilityDetails-text")
        .props.children.toEqual("effect1")
    );
  });
  it("Axios Only one call", () => {
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
