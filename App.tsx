import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigation />
    </NavigationContainer>
  );
}
