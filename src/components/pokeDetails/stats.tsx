import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import TableRow from "../TableRow";
import { capitalize } from "../../utils";
import { LinearProgress } from "react-native-elements";
interface iProps {
  stats: iPokemonStat[];
}
const App: FC<iProps> = ({ stats }) => {
  return (
    <View style={styles.view}>
      {stats &&
        stats.map(({ base_stat, stat }) => (
          <TableRow
            key={stat.name}
            label={capitalize(stat.name)}
            text={base_stat}
          >
            <LinearProgress
              variant="determinate"
              value={100}
              style={{ width: base_stat * 2 }}
              color="gray"
              trackColor="gray"
            />
          </TableRow>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default App;
