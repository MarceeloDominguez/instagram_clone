import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.wrapProfileInfo}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.avatarUser}
      />
      <View style={styles.wrapItem}>
        <Text style={styles.numberItem}>6</Text>
        <Text numberOfLines={1} style={styles.textItem}>
          Publicaciones
        </Text>
      </View>
      <View style={styles.wrapItem}>
        <Text style={styles.numberItem}>100</Text>
        <Text numberOfLines={1} style={styles.textItem}>
          Seguidores
        </Text>
      </View>
      <View style={styles.wrapItem}>
        <Text style={styles.numberItem}>19</Text>
        <Text numberOfLines={1} style={styles.textItem}>
          Seguidos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapProfileInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  avatarUser: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  wrapItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberItem: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  textItem: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
