import React from "react";
import { View, FlatList } from "react-native";
import CirclesHorizontal from "../components/CirclesHorizontal";
import Post from "../components/Post";
import { data } from "../data/data";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <CirclesHorizontal />}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <Post item={item} />;
        }}
      />
    </View>
  );
}
