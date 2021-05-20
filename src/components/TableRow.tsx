import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
interface iProps {
  label?: string | number;
  text?: string | number;
}
const App: FC<iProps> = ({ label, text, children }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: "100%",
  },
  label: {
    minWidth: 120,
    fontSize: 18,
    color: "darkgray",
    marginRight: 10,
  },
  text: {
    color: "gray",
    fontSize: 17,
    marginRight: 10,
  },
  children: {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
});
export default App;
