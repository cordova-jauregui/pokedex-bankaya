import React from "react";
import { ListItem } from "react-native-elements";
import PokeAvatar from "../pokeAvatar";
import { capitalize } from "../../utils";

export default ({ pokemon, testID, onPress }: any) => {
  return (
    <ListItem
      testID={testID}
      key={pokemon.name}
      bottomDivider
      onPress={() => onPress(pokemon)}
    >
      <PokeAvatar url={pokemon.url} />
      <ListItem.Content>
        <ListItem.Title>{capitalize(pokemon.name)}</ListItem.Title>
        <ListItem.Subtitle />
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};
