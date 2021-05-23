import React from "react";
import {
  render,
  act,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react-native";
import Moves from "../src/components/pokeDetails/moves";
import axiosMock from "axios";

jest.useFakeTimers();
// jest.mock("react-native-elements/dist/icons/Icon", () => () => "");

describe("<Moves />", () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      effect_entries: [{ effect: "effect0" }, { effect: "effect1" }],
    },
  });
  let component;
  afterEach(() => cleanup);
  beforeEach(() => {
    component = render(
      <Moves
        moves={[
          { move: { name: "Move1", url: "" } },
          { move: { name: "Move2", url: "" } },
        ]}
      />
    );
  });
  it("Renders correctly", () => {
    expect(component).toBeDefined();
  });
  it("Renders abilities buttons", () => {
    const { getByTestId } = component;
    expect(getByTestId("move-Move1")).toBeDefined();
    expect(getByTestId("move-Move2")).toBeDefined();
    expect(getByTestId("moveText-Move1").props.children).toEqual("Move1");
    expect(getByTestId("moveText-Move2").props.children).toEqual("Move2");
  });
  it("Move fireEvent press", () => {
    const move = component.getByTestId("move-Move1");
    act(() => {
      fireEvent(move, "press");
    });
    waitFor(() =>
      component.getByTestId("effect_effect0").props.children.toEqual("effect0")
    );
  });
  it("Axios Only one call", () => {
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
