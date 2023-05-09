import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CIRCLE_BORDER = 68;
const CIRCLE_AVATAR = 62;

export default function Circle() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff7e01", "#f32ba0", "#9738c3"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.circleBorder}
      >
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
          style={styles.image}
        />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.nameUser}>
        Hola
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    backgroundColor: "#000",
  },
  circleBorder: {
    width: CIRCLE_BORDER,
    height: CIRCLE_BORDER,
    borderRadius: CIRCLE_BORDER / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: CIRCLE_AVATAR,
    height: CIRCLE_AVATAR,
    borderRadius: CIRCLE_AVATAR / 2,
    borderWidth: 3,
    borderColor: "#000",
  },
  nameUser: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    width: 68,
    height: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 5,
  },
});
