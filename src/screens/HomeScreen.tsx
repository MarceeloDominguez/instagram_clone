import React from "react";
import { View, Text, FlatList } from "react-native";
import CirclesHorizontal from "../components/CirclesHorizontal";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <CirclesHorizontal />}
        data={[...Array(10)]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({}) => {
          return <Text>Hola Mundo</Text>;
        }}
      />
    </View>
  );
}
