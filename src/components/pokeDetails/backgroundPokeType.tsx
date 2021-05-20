import React, { FC } from "react";
import { ImageBackground, StyleSheet } from "react-native";
interface iProps {
  types: iPokemonType[];
}
const App: FC<iProps> = ({ types }) => {
  const backgroud = () => {
    const type = types && types[0].type.name;
    switch (type) {
      case "normal":
        return require("../../../assets/pokeTypes/grass.jpeg");
      case "fighting":
        return require("../../../assets/pokeTypes/fighting.jpeg");
      case "poison":
        return require("../../../assets/pokeTypes/poison.jpeg");
      case "ghost":
        return require("../../../assets/pokeTypes/ghost.jpeg");
      case "ground":
        return require("../../../assets/pokeTypes/ground.jpeg");
      case "electric":
        return require("../../../assets/pokeTypes/electric.jpeg");
      case "steel":
        return require("../../../assets/pokeTypes/steel.jpeg");
      case "rock":
        return require("../../../assets/pokeTypes/rock.jpeg");
      case "bug":
        return require("../../../assets/pokeTypes/bug.jpeg");
      case "fire":
        return require("../../../assets/pokeTypes/fire.jpeg");
      case "water":
        return require("../../../assets/pokeTypes/water.jpeg");
      case "grass":
        return require("../../../assets/pokeTypes/grass.jpeg");
      //Etc... etc...
      case undefined:
        return null;
      default:
        return require("../../../assets/pokeTypes/normal.jpeg");
    }
  };
  return <ImageBackground style={styles.background} source={backgroud()} />;
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    height: 300,
  },
});
export default App;
