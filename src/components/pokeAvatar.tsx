import React, { FC } from "react";
import { Avatar } from "react-native-elements";
const pokeAvatar = ({ id, url }: iProps) => {
  let pokemonId = id;
  if (url) {
    const urlSplit = url.split("/");
    pokemonId = Number(urlSplit[urlSplit.length - 2]);
  }
  return `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
};
interface iProps {
  id?: number;
  url?: string;
  size?: number | "small" | "medium" | "large" | "xlarge";
}
const App: FC<iProps> = (props) => {
  return <Avatar size={props.size} source={{ uri: pokeAvatar(props) }} />;
};
export default App;
