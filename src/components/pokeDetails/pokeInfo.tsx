import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import TableRow from "../TableRow";
import Moves from "./moves";
import Stats from "./stats";
import Abilities from "./abilities";
const App: FC<iPokeInfoProps> = ({ pokemon }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "aboutScreen", title: "About" },
    { key: "baseStatsScreen", title: "Base Stats" },
    { key: "movesScreen", title: "Moves" },
  ]);
  const aboutScreen = () => {
    const { height, weight, abilities, base_experience } = pokemon;
    return (
      <View style={styles.tabContainer}>
        <Text style={styles.subTitle}>General</Text>
        <TableRow label="Height" text={`${height / 10} m`} />
        <TableRow label="Weight" text={`${weight / 10} kg`} />
        <TableRow label="Abilities">
          <Abilities abilities={abilities} />
        </TableRow>
        <TableRow label="Experience " text={base_experience} />
      </View>
    );
  };
  const renderScene = SceneMap({
    aboutScreen,
    baseStatsScreen: () => <Stats stats={pokemon.stats} />,
    movesScreen: () => <Moves moves={pokemon.moves} />,
  });
  return (
    <View style={styles.card}>
      <TabView
        renderTabBar={(props) => {
          return (
            <TabBar
              {...props}
              renderLabel={({ route }) => (
                <Text style={{ color: "black" }}>{route.title}</Text>
              )}
              indicatorStyle={{ backgroundColor: "black" }}
              style={{ backgroundColor: "white" }}
            />
          );
        }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 5,
  },
  card: {
    height: "70%",
    paddingTop: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: "white",
  },
  tabContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default App;
