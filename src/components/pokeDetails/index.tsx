import React, { FC, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PokeInfo from "./pokeInfo";
import BackgroudPokeType from "./backgroundPokeType";
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
      <BackgroudPokeType types={pokemon.types} />
      <View style={{ ...styles.view }}>
        <TouchableOpacity></TouchableOpacity>
        {/* <Text>BACK</Text> */}
        <View style={styles.avatarView}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <PokeAvatar style={styles.avatar} size={200} id={pokemon.id} />
        </View>
        <PokeInfo pokemon={pokemon} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
  },
  name: {
    paddingTop: 40,
    color: "white",
    fontSize: 30,
    textTransform: "uppercase",
  },
  avatarView: {
    height: 250,
    paddingHorizontal: 20,
    zIndex: 2,
  },
  avatar: {
    alignSelf: "center",
    marginTop: 15,
  },
});
export default App;
