import React, { FC } from "react";
import { SafeAreaView, ImageBackground, StyleSheet } from "react-native";
const App: FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.view}>
      <ImageBackground
        source={require("../../assets/pokedex-main.png")}
        style={styles.imageBackground}
      >
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 165,
    paddingBottom: 20,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#b61513",
  },
});
export default App;
