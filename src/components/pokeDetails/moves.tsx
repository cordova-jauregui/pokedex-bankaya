import React, { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Overlay } from "react-native-elements";
import { capitalize } from "../../utils";
import axios from "axios";

interface iProps {
  moves: iPokemonMove[];
}
const App: FC<iProps> = ({ moves }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [move, setMove]: any = useState(null);
  const getMove = async (url: string) => {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setMove(result.data);
    } catch (err) {
      alert(`getAbility\n${err}`);
    } finally {
      setLoading(false);
    }
  };
  const onMovePress = async ({ url }: nameAndUrl) => {
    setVisible(true);
    await getMove(url);
  };
  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        {moves &&
          moves.map(({ move }) => (
            <TouchableOpacity
              testID={`move-${move.name}`}
              key={move.name}
              style={styles.move}
              onPress={() => onMovePress(move)}
            >
              <Text testID={`moveText-${move.name}`}>
                {capitalize(move.name)}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
          setMove(null);
        }}
      >
        <Text>{loading ? "Loading..." : null}</Text>
        {move &&
          move.effect_entries.map(({ effect }: any) => (
            <Text key={`effect_${effect}`}>{effect}</Text>
          ))}
      </Overlay>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  ScrollView: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  move: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    fontSize: 20,
    marginVertical: 5,
  },
});
export default App;
