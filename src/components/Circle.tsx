import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Data } from "../interface/interface";

const CIRCLE_BORDER = 68;
const CIRCLE_AVATAR = 62;

type Prop = {
  item: Data;
  showNameUser?: boolean;
  circleBorder?: number;
  circleAvatar?: number;
};

export default function Circle({
  item,
  showNameUser = true,
  circleAvatar,
  circleBorder,
}: Prop) {
  const { avatar, history, namaUser } = item;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          `${history ? "#ff7e01" : "transparent"}`,
          `${history ? "#f32ba0" : "transparent"}`,
          `${history ? "#9738c3" : "transparent"}`,
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.circleBorder,
          {
            width: circleBorder ? circleBorder : CIRCLE_BORDER,
            height: circleBorder ? circleBorder : CIRCLE_BORDER,
          },
        ]}
      >
        <Image
          source={{ uri: avatar }}
          style={[
            styles.image,
            {
              width: circleAvatar ? circleAvatar : CIRCLE_AVATAR,
              height: circleAvatar ? circleAvatar : CIRCLE_AVATAR,
            },
          ]}
        />
      </LinearGradient>
      {showNameUser && (
        <Text numberOfLines={1} style={styles.nameUser}>
          {namaUser}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  circleBorder: {
    borderRadius: CIRCLE_BORDER / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
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
