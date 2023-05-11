import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Profile from "../components/Profile";
import ProfileInfo from "../components/ProfileInfo";
import GridImagesProfile from "../components/GridImagesProfile";
import { MaterialIcons } from "@expo/vector-icons";

type MaterialIconsName = React.ComponentProps<typeof MaterialIcons>["name"];

const tab = ["grid-on", "ondemand-video", "image"];

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Profile />
      <ProfileInfo />
      <View style={styles.containerTab}>
        {tab.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                {
                  borderBottomWidth: selectedTab === index ? 2 : 0,
                  borderBottomColor: selectedTab === index ? "#fff" : null!,
                },
              ]}
              activeOpacity={1}
              onPress={() => setSelectedTab(index)}
            >
              <MaterialIcons
                name={item as MaterialIconsName}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          );
        })}
      </View>
      {selectedTab === 0 && <GridImagesProfile />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  tab: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 10,
  },
});
