import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import PokeList from "../src/components/pokeList";
import axiosMock from "axios";

jest.useFakeTimers();
jest.mock("react-native-elements/dist/icons/Icon", () => () => "");

describe("<PokeList />", () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { results: [{ name: "Poke1", url: "url" }] },
  });
  const component = render(<PokeList />);
  it("Renders pokemon item in list correctly", () => {
    waitFor(() => {
      expect(component.getByTestId("pokeList-item_Poke1")).toBeDefined();
    });
  });
  it("Axios Only one call", () => {
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
