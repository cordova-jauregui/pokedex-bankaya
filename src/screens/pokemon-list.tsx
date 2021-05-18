import React, { FC } from "react";
import Layout from "../layouts";
import PokemonList from "../components/pokeList";
const App: FC<any> = ({ navigation }) => {
  const onDetails = () => {
    console.log("details", navigation);
    navigation.navigate("Details", { a: 1 });
  };
  return (
    <Layout>
      <PokemonList onPress={onDetails} />
    </Layout>
  );
};
export default App;
