import React, { FC, useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";
interface iProps {
  active: boolean;
  testID?: string;
}
const App: FC<iProps> = ({ active, testID }) => {
  return (
    <Overlay
      testID={testID}
      overlayStyle={styles.overlay}
      isVisible={active}
      onBackdropPress={() => {
        active = false;
      }}
    >
      <Image
        style={styles.image}
        source={require("../../assets/pokeLoading.gif")}
      ></Image>
    </Overlay>
  );
};
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#060c10",
    padding: 0,
    borderRadius: 40,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
});
export default App;
