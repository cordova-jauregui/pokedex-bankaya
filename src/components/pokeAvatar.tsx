import React, { FC } from "react";
import { View, Image } from "react-native";
const pokeAvatar = ({ id, url }: iPokeAvatarProps) => {
  let pokemonId = id;
  if (url) {
    const urlSplit = url.split("/");
    pokemonId = Number(urlSplit[urlSplit.length - 2]);
  }
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
};
const App: FC<iPokeAvatarProps> = (props) => {
  const size = props.size || 40;
  return (
    <View style={props.style} testID="pokeAvatar">
      <Image
        testID="pokeAvatar-image"
        style={{ height: size, width: size }}
        source={{ uri: pokeAvatar(props) }}
      />
      {/* <Avatar size={props.size} source={{ uri: pokeAvatar(props) }} /> */}
    </View>
  );
};
export default App;
