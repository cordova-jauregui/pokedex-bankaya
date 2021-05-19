import React, { FC } from "react";
import Layout from "../layouts";
import PokeDetails from "../components/pokeDetails";
const App: FC<iNavigator> = ({ route }) => {
  const pokemon = (route.params && route.params.pokemon) || {};
  return (
    <Layout>
      <PokeDetails pokemon={pokemon} />
    </Layout>
  );
};
export default App;
