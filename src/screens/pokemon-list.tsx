import React, { FC } from "react";
import Layout from "../layouts";
import PokemonList from "../components/pokeList";
const App: FC<iNavigator> = ({ navigation }) => {
  const onDetails = (pokemon: iPokemonInList) => {
    navigation.navigate("Details", { pokemon });
  };
  return (
    <Layout>
      <PokemonList onPress={onDetails} />
    </Layout>
  );
};
export default App;
