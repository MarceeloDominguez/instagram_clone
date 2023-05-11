import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Jonh Doee</Text>
        <Text style={styles.info}>Developer Frontend. React Native 💻</Text>
        <Text style={styles.info}>Buenos Aires, Argentina 🏠</Text>
      </View>
      <View style={styles.wrapButtons}>
        <View style={styles.button}>
          <Text style={styles.titleButton}>Editar perfil</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.titleButton}>Compartir perfil</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 16,
  },
  info: {
    color: "#fff",
    letterSpacing: 0.4,
    fontSize: 15,
    lineHeight: 24,
  },
  wrapButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#262626",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
  titleButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.4,
  },
});
