import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  "https://cdn.pixabay.com/photo/2017/03/10/06/46/city-2131934_640.jpg",
  "https://cdn.pixabay.com/photo/2019/04/04/21/31/port-4103851_640.jpg",
  "https://cdn.pixabay.com/photo/2019/02/13/11/10/whites-beach-3994144_640.jpg",
  "https://cdn.pixabay.com/photo/2019/05/30/16/22/bernikla-canadian-4240160_640.jpg",
  "https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_640.jpg",
  "https://cdn.pixabay.com/photo/2010/12/13/10/19/signage-2653_640.jpg",
  "https://cdn.pixabay.com/photo/2022/07/10/19/30/house-7313645_640.jpg",
  "https://cdn.pixabay.com/photo/2019/09/05/07/23/village-4453338_640.jpg",
  "https://cdn.pixabay.com/photo/2021/06/07/14/21/mountains-6318080_640.jpg",
  "https://cdn.pixabay.com/photo/2016/02/05/16/23/whale-1181395_640.jpg",
];

export default function GridImagesProfile() {
  return (
    <View style={styles.container}>
      {images.map((item, index) => {
        return (
          <View key={index}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: width / 3,
    height: 150,
    borderWidth: 1,
    borderColor: "#000",
  },
});
