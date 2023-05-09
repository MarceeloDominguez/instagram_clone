import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderLeft() {
  return (
    <View style={styles.wrapLogoLeft}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 35,
  },
  wrapLogoLeft: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
});
