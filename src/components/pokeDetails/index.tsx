import React, { FC, useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import PokeAvatar from "../pokeAvatar";
import axios from "axios";
const App: FC<{ pokemon: iPokemon }> = (props) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<iPokemon>({ ...props.pokemon });
  useEffect(() => {
    getPokemon();
  }, []);
  const getPokemon = async () => {
    if (pokemon.url)
      try {
        setLoading(true);
        const result = await axios.get(pokemon.url);
        setPokemon(result.data);
      } catch (err) {
        alert(`getPokemons\n${err}`);
      } finally {
        setLoading(false);
      }
  };
  return (
    <View>
      <Text>Loading {loading ? "true" : "false"}</Text>
      <PokeAvatar size={200} id={pokemon.id} />
      <Text>Detalles</Text>
    </View>
  );
};
export default App;
