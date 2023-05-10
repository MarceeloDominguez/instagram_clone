import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Circle from "./Circle";

type Prop = {
  namaUser: string;
  description: string;
  image: string[];
  width: number;
  scrollX: Animated.Value;
};

const item = {
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  history: false,
  namaUser: "",
};

export default function FooterPost({
  namaUser,
  description,
  image,
  width,
  scrollX,
}: Prop) {
  return (
    <View style={styles.container}>
      {image.length > 1 && (
        <View style={styles.pagination}>
          {image.map((_, index) => {
            return <View key={index} style={styles.dot} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateX: Animated.divide(scrollX, width).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 12],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      )}
      <View style={styles.wrapIcons}>
        <View style={styles.wrapIconsLeft}>
          <MaterialIcons name="favorite-border" size={25} color="#fff" />
          <Ionicons name="chatbubble-outline" size={24} color="#fff" />
          <Image
            source={require("../../assets/arrow-top.png")}
            style={styles.iconArrow}
          />
        </View>
        <Ionicons name="bookmark-outline" size={24} color="#fff" />
      </View>
      <Text style={styles.like}>27 me gusta</Text>
      <View>
        <Text style={styles.nameUser}>
          {namaUser}
          {"  "}
          <Text style={styles.description}>{description}</Text>
        </Text>
      </View>
      <View>
        <View style={styles.wrapAvatarComment}>
          <Circle
            item={item}
            showNameUser={false}
            circleAvatar={36}
            circleBorder={20}
          />
          <Text style={styles.comment}>Agrega un comentario...</Text>
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.time}>Hace 10 min</Text>
          <Text style={styles.translation}> - Ver traducción</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    backgroundColor: "#000",
    paddingVertical: 12,
  },
  wrapIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapIconsLeft: {
    flexDirection: "row",
    gap: 20,
    paddingBottom: 5,
  },
  iconArrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: "-45deg" }],
  },
  nameUser: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 22,
  },
  description: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 14,
    letterSpacing: 0.4,
  },
  like: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  wrapAvatarComment: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 14,
    gap: 8,
  },
  comment: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.6,
    letterSpacing: 0.4,
  },
  wrapText: {
    flexDirection: "row",
    paddingTop: 8,
  },
  time: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.6,
  },
  translation: {
    color: "#fff",
    fontSize: 12,
  },
  pagination: {
    position: "absolute",
    top: 24,
    flexDirection: "row",
    alignSelf: "center",
    color: "violet",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#5b5d5f",
    marginRight: 6,
  },
  dotIndicator: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#0095f6",
    position: "absolute",
    top: -2 / 2,
    left: -2 / 2,
  },
});
