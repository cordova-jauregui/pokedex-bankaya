import React, { FC } from "react";
import { View } from "react-native";
// import Layout from "../layouts";
import PokeDetails from "../components/pokeDetails";
const App: FC<iNavigator> = ({ route }) => {
  const pokemon = (route.params && route.params.pokemon) || {};
  return (
    <View>
      <PokeDetails pokemon={pokemon} />
    </View>
  );
};
export default App;
