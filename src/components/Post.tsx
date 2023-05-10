import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Circle from "./Circle";
import { Data } from "../interface/interface";
import FooterPost from "./FooterPost";

const { width } = Dimensions.get("screen");

type Prop = {
  item: Data;
};

export default function Post({ item }: Prop) {
  const { namaUser, image, description } = item;
  const scrollX = React.useRef(new Animated.Value(0)).current;

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
      <Animated.FlatList
        data={image}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item }}
              style={{ width: width, height: 300 }}
            />
          );
        }}
      />
      <FooterPost
        namaUser={namaUser}
        description={description!}
        image={image!}
        width={width}
        scrollX={scrollX}
      />
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
