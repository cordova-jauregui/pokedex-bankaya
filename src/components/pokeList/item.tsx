import React from "react";
import { ListItem } from "react-native-elements";
import PokeAvatar from "../pokeAvatar";

export default ({ pokemon, onPress }: any) => {
  return (
    <ListItem key={pokemon.name} bottomDivider onPress={() => onPress(pokemon)}>
      <PokeAvatar url={pokemon.url} />
      <ListItem.Content>
        <ListItem.Title>{pokemon.name}</ListItem.Title>
        <ListItem.Subtitle />
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};
