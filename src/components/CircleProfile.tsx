import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CIRCLE_AVATAR = 62;

export default function CircleProfile() {
  return (
    <View>
      <View style={styles.wrapAvatar}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
          }}
          style={styles.avatar}
        />
        <View style={styles.circleAdd}>
          <Ionicons name="add" size={17} color="#fff" />
        </View>
      </View>
      <Text numberOfLines={1} style={styles.titleAvatar}>
        Tu historia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapAvatar: {
    paddingVertical: 7,
    paddingLeft: 16,
    paddingRight: 12,
  },
  avatar: {
    width: CIRCLE_AVATAR,
    height: CIRCLE_AVATAR,
    borderRadius: CIRCLE_AVATAR / 2,
  },
  circleAdd: {
    width: 22,
    height: 22,
    backgroundColor: "#0095f6",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
    right: 10,
    borderWidth: 2,
  },
  titleAvatar: {
    color: "#fff",
    textAlign: "center",
    width: 90,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
});
