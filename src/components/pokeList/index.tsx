import React, { FC, useState, useEffect } from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import LoadingScreen from "../../components/loadingScreen";
import Item from "./item";
import axios from "axios";
import { apiUrl } from "../../constants";
interface iProps {
  onPress: Function;
}
const App: FC<iProps> = ({ onPress }) => {
  const [pokemons, setPokemons] = useState<iPokemonInList[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [threshold, setThreshold] = useState(0);
  useEffect(() => {
    getPokemons().finally(() => {
      setThreshold(1);
    });
  }, [offset]);

  const getMorePokemons = () => {
    if (!loading) console.log("___getMorePokemons", offset + 1, loading);
    if (!loading) setOffset(offset + 1);
  };
  const getPokemons = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${apiUrl}pokemon?offset=${offset * 15}&limit=15"`
      );
      setPokemons(pokemons.concat(result.data.results));
    } catch (err) {
      alert(`getPokemons\n${err}`);
    } finally {
      setLoading(false);
    }
  };
  const renderItem = ({ item }: { item: iPokemonInList }) => {
    return <Item pokemon={item} onPress={onPress} />;
  };
  const renederFooter = () => {
    return loading ? <Text style={styles.loading}>CARGANDO...</Text> : null;
  };
  return (
    <View>
      <LoadingScreen active={loading && offset == 0} />
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        ListFooterComponent={renederFooter}
        keyExtractor={(it, i) => `${it.name}${i}`}
        onEndReached={getMorePokemons}
        onEndReachedThreshold={threshold}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    padding: 10,
    alignContent: "center",
  },
});
export default App;
