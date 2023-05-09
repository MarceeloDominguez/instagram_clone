import React from "react";
import { Text, FlatList } from "react-native";
import Circle from "./Circle";

export default function CirclesHorizontal() {
  return (
    <FlatList
      data={[...Array(10)]}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return <Circle />;
      }}
    />
  );
}
