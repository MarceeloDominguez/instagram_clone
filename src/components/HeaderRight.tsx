import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

type Prop = {
  iconOne: MaterialIconName;
  iconTwo?: MaterialIconName;
  showIconTwo?: boolean;
};

export default function HeaderRight({ iconOne, iconTwo, showIconTwo }: Prop) {
  return (
    <View style={styles.wrapIconRight}>
      <MaterialIcons name={iconOne} size={24} color="#fff" />
      {showIconTwo ? (
        <MaterialIcons name={iconTwo} size={25} color="#fff" />
      ) : (
        <Image
          source={require("../../assets/arrow-top.png")}
          style={styles.iconArrow}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapIconRight: {
    flexDirection: "row",
    gap: 18,
    paddingRight: 10,
  },
  iconArrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: "-45deg" }],
  },
});
