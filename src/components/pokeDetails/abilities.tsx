import React, { FC, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { capitalize } from "../../utils";
import { Overlay } from "react-native-elements";
import axios from "axios";

// import Icon from "react-native-vector-icons/FontAwesome";
interface iProps {
  abilities: iPokemonAbility[];
}
const App: FC<iProps> = ({ abilities }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ability, setAbility]: any = useState(null);
  const getAbility = async (url: string) => {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setAbility(result.data);
    } catch (err) {
      alert(`getAbility\n${err}`);
    } finally {
      setLoading(false);
    }
    console.log("getAbility", url);
  };
  const onAbilityPress = async ({ url }: nameAndUrl) => {
    setVisible(true);
    await getAbility(url);
  };

  return (
    <View style={styles.view}>
      {abilities &&
        abilities.map(({ ability }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onAbilityPress(ability)}
          >
            <Text style={styles.name}>{capitalize(ability.name)}</Text>
          </TouchableOpacity>
        ))}
      <Overlay
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
          setAbility(null);
        }}
      >
        <Text>{loading ? "Loading..." : null}</Text>
        <Text>{ability && ability.effect_entries[1].effect}</Text>
      </Overlay>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  button: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 2,
    borderColor: "lightgray",
    borderWidth: 1,
    backgroundColor: "#424242",
  },
  name: {
    color: "white",
  },
});
export default App;
