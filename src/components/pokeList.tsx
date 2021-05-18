import React, { FC } from "react";
import { PokemonsProvider, usePokemon } from "../context/pokemons-context";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView, StyleSheet } from "react-native";
{
  /* <FlatList
  data={DATA}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  extraData={selectedId}
/>; */
}
const pokeAvatar = (url: String) => {
  const urlSplit = url.split("/");
  const pokemonId = Number(urlSplit[urlSplit.length - 2]);
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
};
const onPress = () => {
  alert("Ouch");
};
const App: FC = () => {
  const { loading, data: pokemons } = usePokemon();
  console.log({ loading, pokemons });

  return (
    <ScrollView>
      {pokemons.map(({ name, url }, i) => {
        return (
          <ListItem key={i} bottomDivider onPress={onPress}>
            <Avatar source={{ uri: pokeAvatar(url) }} />
            <ListItem.Content>
              <ListItem.Title>{name}</ListItem.Title>
              <ListItem.Subtitle>2</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default () => (
  <PokemonsProvider>
    <App />
  </PokemonsProvider>
);
