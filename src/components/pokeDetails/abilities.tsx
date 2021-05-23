import React, { FC, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { capitalize } from "../../utils";
import { Overlay } from "react-native-elements";
import axios from "axios";
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
            testID={`ability_${ability.name}`}
            key={ability.name}
            style={styles.button}
            onPress={() => onAbilityPress(ability)}
          >
            <Text testID={`abilityText_${ability.name}`} style={styles.name}>
              {capitalize(ability.name)}
            </Text>
          </TouchableOpacity>
        ))}
      <Overlay
        testID="ability_overaly"
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
          setAbility(null);
        }}
      >
        <Text testID="abilityDetails-loading">
          {loading ? "Loading..." : null}
        </Text>
        <Text testID="abilityDetails-text">
          {ability && ability.effect_entries[1].effect}
        </Text>
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
