import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Pokemons, Pokemon } from "../screens";
const { Navigator, Screen } = createStackNavigator();

// https://pokeres.bastionbot.org/images/pokemon/2.png
const App: FC = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Pokemons"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Pokemons" component={Pokemons} />
      <Screen name="Details" component={Pokemon} />
    </Navigator>
  );
};
export default App;
