import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Circle from "./Circle";
import { Data } from "../interface/interface";
import FooterPost from "./FooterPost";

type Prop = {
  item: Data;
};

export default function Post({ item }: Prop) {
  const { namaUser, image, description } = item;

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.wrapContentLeft}>
          <Circle
            item={item}
            showNameUser={false}
            circleAvatar={36}
            circleBorder={38}
          />
          <Text style={styles.name}>{namaUser}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={18} color="#fff" />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <FooterPost namaUser={namaUser} description={description!} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingVertical: 4,
  },
  wrapContentLeft: {
    flexDirection: "row",
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    gap: 4,
    left: -5,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
