import React, { FC, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
const App = () => {
  const [myImage, setMyImage] = useState({ uri: "" });

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Se requieren los permisos");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) return;
    else setMyImage({ uri: pickerResult.uri });
    // setMyImage(pickerResult);
  };
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require("../../assets/pokedex-main.png")}
        style={styles.imageBackground}
      >
        <Text>Hola como estas?</Text>

        <Image
          style={styles.image}
          source={{ uri: myImage.uri || "https://picsum.photos/200/200" }}
        ></Image>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={openImagePicker}
        >
          <Text>Image Picker</Text>
        </TouchableOpacity>
        <Button title="Press me" onPress={pressMe} />
        <TouchableOpacity style={styles.TouchableOpacity} onPress={pressMe}>
          <Text>Touchable</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const pressMe = () => {
  Alert.alert("Auch");
};
const styles = StyleSheet.create({
  Button: {},
  TouchableOpacity: {
    backgroundColor: "lightgray",
    marginTop: 10,
    width: 300,
    padding: 10,
  },
  image: { width: 200, height: 200 },
  imageBackground: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default App;
