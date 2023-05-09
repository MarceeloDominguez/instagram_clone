import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderRight() {
  return (
    <View style={styles.wrapIconRight}>
      <MaterialIcons name="favorite-outline" size={24} color="#fff" />
      {/* <Ionicons name="arrow-redo-outline" size={24} color="#fff" /> */}
      <Image
        source={require("../../assets/arrow-top.png")}
        style={{ width: 20, height: 20, transform: [{ rotate: "-45deg" }] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapIconRight: {
    flexDirection: "row",
    gap: 18,
    paddingRight: 10,
  },
});
