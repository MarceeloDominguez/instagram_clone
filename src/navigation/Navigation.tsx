import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import SearchScreen from "../screens/SearchScreen";
import AddScreen from "../screens/AddScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
        tabBarIcon: () => {
          type MaterialIconName = React.ComponentProps<
            typeof MaterialIcons
          >["name"];

          let iconName: MaterialIconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home-filled";
              break;
            case "SearchScreen":
              iconName = "search";
              break;
            case "AddScreen":
              iconName = "add-box";
              break;
            case "ReelsScreen":
              iconName = "ondemand-video";
              break;
          }

          return <MaterialIcons name={iconName!} size={30} color="#fff" />;
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#000" },
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="ReelsScreen" component={ReelsScreen} />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/1.jpg",
                  }}
                  style={[styles.avatarTab, { borderWidth: focused ? 2 : 0 }]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    elevation: 0,
    backgroundColor: "#000",
    borderTopWidth: 0,
  },
  avatarTab: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    borderColor: "#fff",
  },
});
