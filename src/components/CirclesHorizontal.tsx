import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Circle from "./Circle";
import CircleProfile from "./CircleProfile";
import { data } from "../data/data";

export default function CirclesHorizontal() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <CircleProfile />}
        data={data.sort((a, b) => (a.history > b.history ? -1 : 1))}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <Circle item={item} showNameUser />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
  },
});
