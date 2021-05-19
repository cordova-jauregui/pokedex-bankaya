import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
import { PokemonList, PokemonDetails } from "../screens";
const mainNav: FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="List">
        <Screen name="List" component={PokemonList} />
        <Screen name="Details" component={PokemonDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
export default mainNav;
