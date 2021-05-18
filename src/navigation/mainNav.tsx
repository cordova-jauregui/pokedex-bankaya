import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import PokeList from "./PokeList";

const mainNav: FC = () => {
  return (
    <NavigationContainer>
      <PokeList />
    </NavigationContainer>
  );
};
export default mainNav;
