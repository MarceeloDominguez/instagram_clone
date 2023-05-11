import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderLeftProfile() {
  return (
    <View style={styles.container}>
      <Feather name="lock" size={15} color="#fff" />
      <Text style={styles.nameUser}>johndoee</Text>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingLeft: 15,
  },
  nameUser: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 18,
  },
});
